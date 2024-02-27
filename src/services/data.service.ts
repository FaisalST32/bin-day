import { CollectionData } from '../data.ts/collection.data';
import { CollectionType } from '../types/collection.types';

export const getCollectionCodes = () => {
	return [
		{ label: 'FRIAA', code: 'FRIAA' },
		{ label: 'FRIBB', code: 'FRIBB' },
		{ label: 'FRICC', code: 'FRICC' },
		{ label: 'FRIDD', code: 'FRIDD' },
		{ label: 'THUAA', code: 'THUAA' },
		{ label: 'THUCC', code: 'THUCC' },
		{ label: 'THUDD', code: 'THUDD' },
		{ label: 'TUEBB', code: 'TUEBB' },
		{ label: 'TUECC', code: 'TUECC' },
		{ label: 'TUEDD', code: 'TUEDD' },
		{ label: 'WEDAA', code: 'WEDAA' },
		{ label: 'WEDCC', code: 'WEDCC' },
		{ label: 'WEDDD', code: 'WEDDD' },
	];
};

export const getNextCollection = (code: string, dates?: CollectionType[]) => {
	// return;
	const collection = dates ?? CollectionData[code];
	if (!collection) {
		return '';
	}
	let smallestDiff = Infinity;
	let nearestDate = {} as CollectionType;
	const today = new Date().getTime();
	for (let i = 0; i < collection.length; i++) {
		const diff = new Date(collection[i].date).getTime() - today;
		if (diff > 0 && diff < smallestDiff) {
			smallestDiff = diff;
			nearestDate = {
				...collection[i],
				date: new Date(collection[i].date),
			};
		}
	}
	return nearestDate;
};
