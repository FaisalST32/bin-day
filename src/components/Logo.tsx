import truck from '../assets/brand/truck.png';
import wordmark from '../assets/brand/wordmark.png';

export const Logo = ({ height = 26 }: { height?: number }) => (
	<span
		style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.3 }}
		role='img'
		aria-label='Bindicator'
	>
		<i
			style={{
				width: height * 1.58,
				height,
				background: 'var(--truck)',
				WebkitMask: `url(${truck}) center / contain no-repeat`,
				mask: `url(${truck}) center / contain no-repeat`,
			}}
		/>
		<img src={wordmark} alt='' style={{ height: height * 0.64, display: 'block' }} />
	</span>
);
