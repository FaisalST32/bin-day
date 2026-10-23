import { CollectionData } from '../data.ts/collection.data';
import { BinKind, parseBin } from '../lib/bins';
import { addDays, daysBetween, fromKey, parseTime, startOfDay, toUkKey } from '../lib/dates';

export type Collection = {
	key: string;
	date: Date;
	bins: BinKind[];
};

type RawCollection = { color: string[]; date: string };

/**
 * Bin night runs from the night-before reminder time (or BIN_NIGHT_START when that reminder is off)
 * until BIN_NIGHT_END on the day.
 */
export const BIN_NIGHT_START = '18:00';
export const BIN_NIGHT_END = 7;

const cache = new Map<string, Collection[]>();

/** Hidden code with a collection every day, for trying out reminders, bin night and widgets. */
export const TEST_CODE = 'TEST';

const TEST_ROTATION = [
	['Black Bin'],
	['Blue Bin'],
	['Brown Bin'],
	['Green Bin'],
	['Black Bin', 'Green Bin'],
	['Blue Bin', 'Green Bin'],
	['Brown Bin', 'Green Bin'],
];

const testCalendar = (): RawCollection[] => {
	const start = fromKey('2026-10-12');
	return Array.from({ length: 400 }, (_, i) => {
		const date = addDays(start, i);
		return { color: TEST_ROTATION[date.getDay()], date: date.toISOString() };
	});
};

const readRaw = (code: string): RawCollection[] | undefined => {
	if (code === TEST_CODE) return testCalendar();
	const builtIn = CollectionData[code];
	if (builtIn) return builtIn;
	// Calendars uploaded as PDFs in older versions were saved here.
	const stored = window.localStorage.getItem(`collection_${code}`);
	return stored ? JSON.parse(stored) : undefined;
};

export const getCodes = () => Object.keys(CollectionData).sort();

export const hasCode = (code: string) => !!code && !!readRaw(code);

export const getCollections = (code: string): Collection[] => {
	const cached = cache.get(code);
	if (cached) return cached;
	const collections = (readRaw(code) ?? [])
		.map((raw) => {
			const key = toUkKey(raw.date);
			return {
				key,
				date: fromKey(key),
				bins: raw.color
					.map(parseBin)
					.filter((b): b is BinKind => !!b),
			};
		})
		.filter((c) => c.bins.length > 0)
		.sort((a, b) => a.date.getTime() - b.date.getTime());
	cache.set(code, collections);
	return collections;
};

/** Collections from today onwards. */
export const getUpcoming = (code: string, now = new Date()) => {
	const today = startOfDay(now).getTime();
	return getCollections(code).filter((c) => c.date.getTime() >= today);
};

export const getNext = (code: string, now = new Date()) =>
	getUpcoming(code, now)[0];

export const getNextPerBin = (code: string, now = new Date()) => {
	const result: Partial<Record<BinKind, Collection>> = {};
	for (const c of getUpcoming(code, now)) {
		for (const bin of c.bins) {
			result[bin] ??= c;
		}
	}
	return result;
};

/** The weekday a code is normally collected on (0 = Sunday). */
export const getUsualWeekday = (code: string) => {
	const counts = new Array(7).fill(0);
	for (const c of getCollections(code)) counts[c.date.getDay()]++;
	return counts.indexOf(Math.max(...counts));
};

/** True when a collection falls on a different day from usual, e.g. over Christmas. */
export const isMoved = (code: string, c: Collection) =>
	code !== TEST_CODE && c.date.getDay() !== getUsualWeekday(code);

export const getLastDate = (code: string) => {
	const all = getCollections(code);
	return all[all.length - 1]?.date;
};

export type BinNight = {
	collection: Collection;
	phase: 'tonight' | 'morning';
};

/** `start` is the "HH:MM" time bin night begins on the evening before. */
export const getBinNight = (code: string, now = new Date(), start = BIN_NIGHT_START): BinNight | undefined => {
	const next = getNext(code, now);
	if (!next) return;
	const days = daysBetween(now, next.date);
	const { hour, minute } = parseTime(start);
	const minutes = now.getHours() * 60 + now.getMinutes();
	if (days === 1 && minutes >= hour * 60 + minute) return { collection: next, phase: 'tonight' };
	if (days === 0 && now.getHours() < BIN_NIGHT_END) return { collection: next, phase: 'morning' };
	return;
};

/** The evening before a collection. */
export const nightBefore = (c: Collection) => addDays(c.date, -1);
