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
	let collection = dates ?? CollectionData[code];
	if (!collection) {
		const collectionStr = window.localStorage.getItem(`collection_${code}`);
		if (collectionStr) {
			collection = JSON.parse(collectionStr);
		}
	}

	if (!collection) {
		return '';
	}
	let smallestDiff = Infinity;
	let nearestDate = {} as CollectionType;
	const today = new Date();
	const todayTime = today.getTime();
	for (let i = 0; i < collection.length; i++) {
		const collectionDate = new Date(collection[i].date);
		if (
			collectionDate.toLocaleDateString() === today.toLocaleDateString()
		) {
			return {
				...collection[i],
				date: collectionDate,
			};
		}
		const diff = collectionDate.getTime() - todayTime;
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

export const saveCollectionData = (code: string, dates: CollectionType[]) => {
	window.localStorage.setItem(`collection_${code}`, JSON.stringify(dates));
};

export const getDaysToBinColors = (code: string) => {
	// return;
	const collection = getCollections(code);
	if (!collection) {
		return;
	}
	const today = new Date();
	const todayTime = today.getTime();
	let result = {
		black: { diff: Infinity, collection: {} as CollectionType },
		blue: { diff: Infinity, collection: {} as CollectionType },
		green: { diff: Infinity, collection: {} as CollectionType },
		brown: { diff: Infinity, collection: {} as CollectionType },
	} as Record<string, { diff: number; collection: CollectionType }>;
	for (let i = 0; i < collection.length; i++) {
		const diff = new Date(collection[i].date).getTime() - todayTime;

		collection[i].color.forEach((c) => {
			const color = c.split(' ')[0].toLowerCase();
			const collectionDate = new Date(collection[i].date);

			if (
				collectionDate.toLocaleDateString() ===
				today.toLocaleDateString()
			) {
				result[color].diff = diff;
				result[color].collection = {
					...collection[i],
					date: collectionDate,
				};
				return;
			}
			if (diff > 0 && diff < result[color].diff) {
				result[color].diff = diff;
				result[color].collection = {
					...collection[i],
					date: collectionDate,
				};
			}
		});
	}
	return result;
};

const getCollections = (code: string) => {
	let collection = CollectionData[code];
	if (!collection) {
		const collectionStr = window.localStorage.getItem(`collection_${code}`);
		if (collectionStr) {
			collection = JSON.parse(collectionStr);
		}
	}
	return collection;
};
