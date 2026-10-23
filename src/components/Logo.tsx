import mascot from '../assets/brand/mascot.png';
import wordmark from '../assets/brand/wordmark.png';

export const Logo = ({ height = 26 }: { height?: number }) => (
	<span
		style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.28 }}
		role='img'
		aria-label='Bindicator'
	>
		<img src={mascot} alt='' style={{ height: height * 1.4, margin: `${-height * 0.2}px 0`, display: 'block' }} />
		<img src={wordmark} alt='' style={{ height: height * 0.64, display: 'block' }} />
	</span>
);
