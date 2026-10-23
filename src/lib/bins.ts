export type BinKind = 'black' | 'blue' | 'brown' | 'green';

export const BIN_KINDS: BinKind[] = ['black', 'blue', 'brown', 'green'];

type BinMeta = {
	label: string;
	contents: string;
	color: string;
	colorDark: string;
	gradient: [string, string, string];
};

export const BINS: Record<BinKind, BinMeta> = {
	black: {
		label: 'Black',
		contents: 'General waste',
		color: '#2b2f36',
		colorDark: '#4b515c',
		gradient: ['#4a4f59', '#2b2f36', '#1b1e23'],
	},
	blue: {
		label: 'Blue',
		contents: 'Paper & cardboard',
		color: '#2f6fed',
		colorDark: '#2f6fed',
		gradient: ['#5b8ff5', '#2f6fed', '#1f4fc0'],
	},
	brown: {
		label: 'Brown',
		contents: 'Cans, glass & plastics',
		color: '#8a5a3b',
		colorDark: '#9a6847',
		gradient: ['#b07a55', '#8a5a3b', '#5f3d27'],
	},
	green: {
		label: 'Green',
		contents: 'Food & garden waste',
		color: '#3a9a4f',
		colorDark: '#46b35d',
		gradient: ['#5cc06f', '#3a9a4f', '#276b36'],
	},
};

/** Parses council labels such as "Blue Bin" into a bin kind. */
export const parseBin = (label: string): BinKind | undefined => {
	const word = label.trim().split(/\s+/)[0]?.toLowerCase();
	return BIN_KINDS.find((kind) => kind === word);
};

/** "Blue bin", "Black and Green bins", "Black, Blue and Green bins". */
export const binsPhrase = (bins: BinKind[]) => {
	const names = bins.map((b) => BINS[b].label);
	if (names.length <= 1) return `${names[0] ?? ''} bin`;
	return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]} bins`;
};

const MASCOT_PICTURES = new Set(['black', 'blue', 'brown', 'green', 'black-green', 'blue-green', 'brown-green']);

/**
 * Name of the mascot picture for these bins, as shipped in public/notifications/<name>.jpg and
 * Android's drawable notif_<name>. Falls back to the first bin, or the orange app mascot.
 */
export const mascotPicture = (bins: BinKind[] = []) => {
	const sorted = BIN_KINDS.filter((b) => bins.includes(b));
	const key = sorted.join('-');
	if (MASCOT_PICTURES.has(key)) return key;
	return sorted[0] ?? 'bindicator';
};

export const binsContents = (bins: BinKind[]) =>
	bins.map((b) => BINS[b].contents).join(' · ');
