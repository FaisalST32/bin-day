import { BINS, BinKind } from '../lib/bins';

const shade = (hex: string, amount: number) => {
	const n = parseInt(hex.slice(1), 16);
	const c = (s: number) => Math.max(0, Math.min(255, ((n >> s) & 255) + amount));
	return '#' + ((c(16) << 16) | (c(8) << 8) | c(0)).toString(16).padStart(6, '0');
};

type BinIconProps = {
	kind: BinKind;
	size?: number;
	/** Lighter rendering for use on a bin-coloured background. */
	onColor?: boolean;
	dark?: boolean;
	houseNumber?: string;
	dimmed?: boolean;
};

export const BinIcon = ({ kind, size = 60, onColor, dark, houseNumber, dimmed }: BinIconProps) => {
	const base = dark ? BINS[kind].colorDark : BINS[kind].color;
	const body = onColor ? shade(base, 70) : base;
	const lid = shade(body, -28);
	const rim = shade(body, 18);
	const outline = onColor
		? 'rgba(255,255,255,.55)'
		: dark
		? 'rgba(255,255,255,.14)'
		: 'rgba(0,0,0,.08)';
	return (
		<svg
			viewBox='0 0 100 120'
			width={size}
			height={size * 1.2}
			style={{ display: 'block', overflow: 'visible', opacity: dimmed ? 0.4 : 1 }}
			aria-hidden
		>
			<rect x='22' y='8' width='56' height='6' rx='3' fill={lid} />
			<path d='M12 16 Q12 13 15 13 H85 Q88 13 88 16 V24 H12 Z' fill={lid} stroke={outline} />
			<path d='M17 24 H83 L76 104 Q75.5 107 72 107 H28 Q24.5 107 24 104 Z' fill={body} stroke={outline} />
			<path d='M17 24 H83 L82.2 32 H17.8 Z' fill={rim} opacity={0.55} />
			<path d='M30 38 L33 98 M70 38 L67 98' stroke='rgba(0,0,0,.14)' strokeWidth='3' strokeLinecap='round' />
			{houseNumber && (
				<>
					<circle cx='50' cy='62' r='11' fill='#fff' opacity={0.95} />
					<text x='50' y='66.5' fontSize='12' fontWeight='800' textAnchor='middle' fill={body} fontFamily='-apple-system,system-ui'>
						{houseNumber}
					</text>
				</>
			)}
			<circle cx='28' cy='111' r='7' fill='#15171a' />
			<circle cx='28' cy='111' r='2.6' fill='#7a7f88' />
			<circle cx='72' cy='111' r='7' fill='#15171a' />
			<circle cx='72' cy='111' r='2.6' fill='#7a7f88' />
		</svg>
	);
};

export const BinGroup = ({ bins, size = 60, ...rest }: { bins: BinKind[] } & Omit<BinIconProps, 'kind'>) => (
	<span style={{ display: 'inline-flex', alignItems: 'flex-end' }}>
		{bins.map((kind, i) => (
			<span key={kind} style={{ marginLeft: i ? -size * 0.18 : 0 }}>
				<BinIcon kind={kind} size={size} {...rest} />
			</span>
		))}
	</span>
);
