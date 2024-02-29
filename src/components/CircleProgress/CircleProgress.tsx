const cleanPercentage = (percentage: number) => {
	const tooLow = !Number.isFinite(+percentage) || percentage < 0;
	const tooHigh = percentage > 100;
	return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }: { colour: string; pct?: number }) => {
	const r = 140;
	const circ = 2 * Math.PI * r;
	const strokePct = ((100 - pct!) * circ) / 100;
	return (
		<circle
			r={r}
			cx={200}
			cy={200}
			fill='transparent'
			stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
			strokeWidth={'2px'}
			strokeDasharray={circ}
			strokeDashoffset={pct ? strokePct : 0}
			strokeLinecap='round'
		></circle>
	);
};

const Text = ({ percentage }: { percentage: number }) => {
	return (
		<text
			x='50%'
			y='50%'
			dominantBaseline='central'
			textAnchor='middle'
			fontSize={'1.5em'}
		>
			{percentage.toFixed(0)}%
		</text>
	);
};

export const Pie = ({
	percentage,
	colour,
}: {
	colour: string;
	percentage: number;
}) => {
	const pct = cleanPercentage(percentage);
	return (
		<svg width={400} height={400}>
			<g transform={`rotate(-90 ${'200 200'})`}>
				<Circle colour='lightgrey' />
				<Circle colour={colour} pct={pct} />
			</g>
		</svg>
	);
};
