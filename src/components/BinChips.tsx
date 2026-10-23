import { BINS, BinKind } from '../lib/bins';
import { useIsDark } from '../lib/useTheme';

export const BinChips = ({ bins }: { bins: BinKind[] }) => {
	const dark = useIsDark();
	return (
		<div className='chips'>
			{bins.map((b) => (
				<span className='chip' key={b}>
					<span className='dot' style={{ background: dark ? BINS[b].colorDark : BINS[b].color }} />
					{BINS[b].label}
				</span>
			))}
		</div>
	);
};
