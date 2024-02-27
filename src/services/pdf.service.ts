import { PickedFile } from '@capawesome/capacitor-file-picker';
import { TextItem, TextMarkedContent } from 'pdfjs-dist/types/src/display/api';
// @ts-ignore
import * as pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs';
import { CollectionType } from '../types/collection.types';
import { getDocument, GlobalWorkerOptions, version } from 'pdfjs-dist';

GlobalWorkerOptions.workerSrc = pdfjsWorker; // `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.js`;

export function parse(text: string) {
	const items = text.split('\n');
	let year = 0;
	const parsedData: CollectionType[] = [];

	for (let i = 0; i < items.length; i++) {
		const line = items[i];
		if (line.includes(' Collections')) {
			year = +line.split(' ')[1];
			continue;
		}
		const regex = /(\d{1,2}(st|nd|rd|th) \w+): ([\w\s&]+)(?=\s•|$)/g;
		if (regex.test(line)) {
			const [dateStr, colors] = line.replace('• ', '').split(': ');
			const colorsArr = colors.split(' & ');
			const date = new Date(
				dateStr.replace(/st|nd|rd|th/g, '') + ' ' + year
			);
			parsedData.push({
				color: colorsArr,
				date,
				dateStr: dateStr + ' ' + year,
			});
		}
	}
	return parsedData;
}

// Function to extract dates and bins information
function extractDatesAndBins(text: string) {
	const regex = /(\d{1,2}(st|nd|rd|th) \w+): ([\w\s&]+)(?=\s•|$)/g;
	const matches = [];
	let match;

	while ((match = regex.exec(text)) !== null) {
		const date = match[1];
		const bins = match[3].split(' & ').join(', ');
		matches.push(`${date}: ${bins}`);
	}

	return matches;
}

// Function to format dates and bins information
function formatOutput(matches: string[]) {
	let result = '';

	for (const match of matches) {
		result += match + ' • ';
	}

	return result.slice(0, -3); // Remove the last ' • '
}

export const extractData = (
	file: PickedFile
): Promise<{
	collectionCode: string;
	dates: CollectionType[];
}> => {
	return new Promise((res) => {
		const reader = new FileReader();

		reader.onload = async (e) => {
			const contents = e.target?.result!;
			const pdf = await getDocument(contents).promise;
			const pagesCount = pdf.numPages;
			let extractedPages: string[] = [];
			let result: { collectionCode: string; dates: CollectionType[] } = {
				collectionCode: '',
				dates: [],
			};
			for (let i = 1; i <= pagesCount; i++) {
				const page = await pdf.getPage(i);
				const textContent = await page.getTextContent();
				const pageText = textContent.items
					.reduce(
						(prev, item: TextItem | TextMarkedContent) => {
							prev[prev.length - 1] += (item as TextItem).str;
							if ((item as TextItem).hasEOL) {
								prev.push('');
							}
							return prev;
						},
						[''] as string[]
					)
					.join('\n');
				extractedPages.push(pageText);
				if (i === 7 || i === 8) {
					// Extract dates and bins information
					const datesAndBins = parse(pageText);
					result.dates.push(...datesAndBins);
				}
				if (i === 1) {
					const split = pageText.split('\n');
					result.collectionCode = split[split.length - 1];
				}
			}
			res(result);
		};

		reader.readAsArrayBuffer(file.blob!);
	});
};
