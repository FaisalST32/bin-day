import { StatusBar, Style } from '@capacitor/status-bar';
import { BinChips } from '../../components/BinChips';
import { BinIcon } from '../../components/BinIcon';
import { UserIcon } from '../../components/Icons';
import { Logo } from '../../components/Logo';
import { SlideToConfirm } from '../../components/SlideToConfirm/SlideToConfirm';
import { BINS, binsContents, binsPhrase } from '../../lib/bins';
import { addDays, shortDate, weekdayName } from '../../lib/dates';
import { ForcedDark } from '../../lib/useTheme';
import { BinNight as BinNightState, Collection } from '../../services/schedule';

export const setForcedDark = (on: boolean) => {
	document.documentElement.classList.toggle('force-dark', on);
	StatusBar.setStyle({ style: on ? Style.Dark : Style.Default }).catch(() => undefined);
};

type Props = {
	night: BinNightState;
	after?: Collection;
	onDone: () => void;
	onProfile: () => void;
};

export const BinNight = ({ night, after, onDone, onProfile }: Props) => {
	const { collection, phase } = night;
	const main = collection.bins[0];
	const color = BINS[main].colorDark;
	const plural = collection.bins.length > 1;
	const day = phase === 'tonight' ? addDays(collection.date, -1) : collection.date;

	return (
		<ForcedDark.Provider value>
			<div className='page'>
				<div className='night-glow' style={{ background: `radial-gradient(circle, ${color}8c 0%, ${color}00 65%)` }} />
				<div className='topbar'>
					<Logo />
					<button className='icon-btn' aria-label='Settings' onClick={onProfile}>
						<UserIcon />
					</button>
				</div>
				<div className='eyebrow tonight' style={{ color: '#8fb3ff' }}>
					{phase === 'tonight' ? 'Tonight' : 'This morning'} · {weekdayName(day)}
				</div>
				<h1>
					Put the {binsPhrase(collection.bins)} out{phase === 'morning' ? ' now' : ''}
				</h1>
				<div className='sub'>
					{phase === 'tonight' ? 'Collected tomorrow.' : 'Collected today.'} {binsContents(collection.bins)}.
				</div>
				<div className='bigbin'>
					<span style={{ display: 'inline-flex', alignItems: 'flex-end' }}>
						{collection.bins.map((b, i) => (
							<span key={b} style={{ marginLeft: i ? -30 : 0 }}>
								<BinIcon kind={b} size={plural ? 150 : 200} dark />
							</span>
						))}
					</span>
				</div>
				<SlideToConfirm label={`Slide when ${plural ? "they're" : "it's"} out`} color={color} onConfirm={onDone} />
				{after && (
					<div className='card next'>
						<BinChips bins={after.bins} />
						<div style={{ marginLeft: 'auto', textAlign: 'right' }}>
							<div className='t'>Next</div>
							<div className='b'>{shortDate(after.date)}</div>
						</div>
					</div>
				)}
			</div>
		</ForcedDark.Provider>
	);
};
