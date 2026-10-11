// Refreshes src/data.ts/collection.data.ts from Wigan Council's published calendars.
//
// Usage:
//   npm run update-calendars              download every code's PDF from the council
//   npm run update-calendars -- --dir X   use CODE.pdf files already saved in folder X
//   npm run update-calendars -- FRIDDG    also add codes not yet in the data file
//
// Entries from the new calendars replace existing ones from the calendar's first date
// onwards; older entries are kept. Downloaded PDFs are saved to src/assets/calendars.

process.env.TZ = 'Europe/London';

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA_FILE = path.join(ROOT, 'src/data.ts/collection.data.ts');
const PDF_DIR = path.join(ROOT, 'src/assets/calendars');
const CALENDAR_URL = 'https://apps.wigan.gov.uk/MyNeighbourhood/Calendars';
const DATA_MARKER = 'export const CollectionData';

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const WEEKDAYS = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const BIN_PATTERN = /^(Blue|Black|Brown|Green) Bin$/;

const warnings = [];
const warn = (code, message) => warnings.push(`${code}: ${message}`);

const toTitleCase = (s) => s[0].toUpperCase() + s.slice(1).toLowerCase();

async function loadPdf(code, dir) {
	if (dir) {
		return new Uint8Array(fs.readFileSync(path.join(dir, `${code}.pdf`)));
	}
	const res = await fetch(`${CALENDAR_URL}/${code}.pdf`);
	const type = res.headers.get('content-type') ?? '';
	if (!res.ok || !type.includes('pdf')) {
		throw new Error(`${code}: download failed (${res.status} ${type})`);
	}
	const data = new Uint8Array(await res.arrayBuffer());
	fs.writeFileSync(path.join(PDF_DIR, `${code}.pdf`), data);
	return data;
}

async function extractText(data) {
	const pdf = await getDocument({ data, verbosity: 0 }).promise;
	let text = '';
	for (let i = 1; i <= pdf.numPages; i++) {
		const content = await (await pdf.getPage(i)).getTextContent();
		for (const item of content.items) {
			text += item.str;
			if (item.hasEOL) text += '\n';
		}
		text += '\n';
	}
	return text;
}

function parseCalendar(code, text) {
	const lines = text
		.split('\n')
		.map((l) => l.trim())
		.filter(Boolean);

	if (!lines.includes(code)) {
		throw new Error(`${code}: PDF does not mention its own code`);
	}
	const dayMatch = text.match(/Your collection day is (\w+)/i);
	if (!dayMatch) {
		throw new Error(`${code}: collection day not found`);
	}
	const collectionDay = toTitleCase(dayMatch[1]);

	const items = [];
	let year;
	let month;
	for (const line of lines) {
		const header = line.match(/^(\w+) (\d{4}) Collections$/);
		if (header) {
			month = MONTHS.indexOf(header[1]);
			year = +header[2];
			continue;
		}
		const bullet = line.match(
			/^•\s*(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+):?\s+(.+)$/
		);
		if (bullet) {
			if (year === undefined) {
				throw new Error(`${code}: entry before any month header: ${line}`);
			}
			if (MONTHS.indexOf(bullet[2]) !== month) {
				warn(
					code,
					`"${line}" is listed under ${MONTHS[month]} ${year}; using ${MONTHS[month]}`
				);
			}
			items.push({ day: +bullet[1], month, year, rest: bullet[3], line });
			continue;
		}
		const note = line.match(/^\((\w+)\)$/);
		if (note && items.length) {
			items[items.length - 1].rest += ` (${note[1]})`;
		}
	}

	const entries = items.map(({ day, month, year, rest, line }) => {
		const note = rest.match(/\((\w+)\)/)?.[1];
		const color = rest
			.replace(/\(\w+\)/g, '')
			.split('&')
			.map((c) => c.trim());
		if (!color.every((c) => BIN_PATTERN.test(c))) {
			throw new Error(`${code}: unrecognised bins in "${line}"`);
		}
		const date = new Date(year, month, day);
		const weekday = WEEKDAYS[date.getDay()];
		const expected = note ?? collectionDay;
		if (weekday !== expected) {
			warn(code, `"${line}" falls on a ${weekday}, expected ${expected}`);
		}
		return {
			color,
			date: date.toISOString(),
			dateStr: `${day} ${MONTHS[month]} ${year}`,
		};
	});

	for (let i = 1; i < entries.length; i++) {
		if (entries[i].date <= entries[i - 1].date) {
			throw new Error(`${code}: dates out of order at ${entries[i].dateStr}`);
		}
	}
	return { collectionDay, entries };
}

function readExistingData(source) {
	const data = {};
	const body = source.slice(source.indexOf(DATA_MARKER));
	const blocks = body.split(/^\t([A-Z]{5}): \[$/m);
	for (let i = 1; i < blocks.length; i += 2) {
		const entryPattern =
			/color: \[([^\]]*)\],\s*date: '([^']+)',\s*dateStr: '([^']+)'/g;
		data[blocks[i]] = [...blocks[i + 1].matchAll(entryPattern)].map((m) => ({
			color: [...m[1].matchAll(/'([^']+)'/g)].map((c) => c[1]),
			date: m[2],
			dateStr: m[3],
		}));
	}
	return data;
}

function serialise(data) {
	const blocks = Object.entries(data).map(([code, entries]) => {
		const items = entries.map(
			(e) =>
				`\t\t{\n` +
				`\t\t\tcolor: [${e.color.map((c) => `'${c}'`).join(', ')}],\n` +
				`\t\t\tdate: '${e.date}',\n` +
				`\t\t\tdateStr: '${e.dateStr}',\n` +
				`\t\t},`
		);
		return `\t${code}: [\n${items.join('\n')}\n\t],`;
	});
	return `${DATA_MARKER}: {\n\t[collectionKey: string]: ColorStringDateMapType[];\n} = {\n${blocks.join('\n')}\n};\n`;
}

function describeChanges(oldEntries, newEntries) {
	const key = (e) => `${e.dateStr}: ${e.color.join(' & ')}`;
	const oldKeys = new Set(oldEntries.map(key));
	const newKeys = new Set(newEntries.map(key));
	return [
		...oldEntries.filter((e) => !newKeys.has(key(e))).map((e) => `- ${key(e)}`),
		...newEntries.filter((e) => !oldKeys.has(key(e))).map((e) => `+ ${key(e)}`),
	];
}

async function main() {
	const args = process.argv.slice(2);
	const dirFlag = args.indexOf('--dir');
	const dir = dirFlag > -1 ? path.resolve(args[dirFlag + 1]) : undefined;
	const newCodes = args
		.filter((a, i) => !a.startsWith('--') && (dirFlag === -1 || i !== dirFlag + 1))
		.map((a) => a.toUpperCase());

	const source = fs.readFileSync(DATA_FILE, 'utf8');
	const existing = readExistingData(source);
	for (const code of newCodes) {
		existing[code] ??= [];
	}
	const codes = Object.keys(existing);
	if (!codes.length) {
		throw new Error('No collection codes found in collection.data.ts');
	}

	const updated = {};
	for (const code of codes) {
		const { collectionDay, entries } = parseCalendar(
			code,
			await extractText(await loadPdf(code, dir))
		);
		const start = entries[0].date;
		const kept = existing[code].filter(
			(e) => new Date(e.date) < new Date(start)
		);
		const replaced = existing[code].filter(
			(e) => new Date(e.date) >= new Date(start)
		);
		updated[code] = [...kept, ...entries];

		const changes = replaced.length
			? describeChanges(
					replaced.filter((e) => new Date(e.date) <= new Date(entries.at(-1).date)),
					entries.filter((e) => new Date(e.date) <= new Date(replaced.at(-1).date))
			  )
			: [];
		console.log(
			`${code} (${collectionDay})${existing[code].length ? '' : ' [new code]'}: ` +
				`${entries.length} collections, ` +
				`${entries[0].dateStr} – ${entries.at(-1).dateStr}` +
				(changes.length
					? `\n  changes to already-known dates:\n    ${changes.join('\n    ')}`
					: '')
		);
	}

	fs.writeFileSync(
		DATA_FILE,
		source.slice(0, source.indexOf(DATA_MARKER)) + serialise(updated)
	);

	if (warnings.length) {
		console.log(`\nWarnings:\n  ${warnings.join('\n  ')}`);
	}
	console.log(`\nUpdated ${path.relative(ROOT, DATA_FILE)}`);
}

main().catch((err) => {
	console.error(err.message);
	process.exit(1);
});
