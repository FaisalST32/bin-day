import { IonContent, IonPage, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { BinChips } from '../../components/BinChips';
import { BinGroup } from '../../components/BinIcon';
import { BellIcon, CheckIcon, ChevronRight, UserIcon } from '../../components/Icons';
import { Logo } from '../../components/Logo';
import { BINS, binsContents, binsPhrase } from '../../lib/bins';
import {
	dayMonth,
	daysBetween,
	formatTime,
	relativeDays,
	shortDate,
	timeOfDay,
	weekdayName,
} from '../../lib/dates';
import { binNightFor, nextReminder } from '../../services/reminders';
import { Collection, getUpcoming, isMoved } from '../../services/schedule';
import { useAppState } from '../../state/AppState';
import { BinNight, setForcedDark } from './BinNight';
import './Today.css';

const reminderWhen = (at: Date, now: Date) => {
	const days = daysBetween(now, at);
	const time = formatTime(`${at.getHours()}:${at.getMinutes()}`);
	if (days === 0) return `${at.getHours() >= 17 ? 'tonight' : 'today'}, ${time}`;
	if (days === 1) return `tomorrow, ${time}`;
	if (days < 7) return `${weekdayName(at, 'short')}, ${time}`;
	return `${shortDate(at)}, ${time}`;
};

export const TodayPage = () => {
	const { settings, now, markPutOut } = useAppState();
	const history = useHistory();
	const upcoming = getUpcoming(settings.code, now);
	const next = upcoming[0];
	const binNight = binNightFor(settings, now);
	const reminder = nextReminder(settings, now);

	const night = binNight && !settings.putOut.includes(binNight.collection.key) ? binNight : undefined;
	const visible = useRef(false);

	useEffect(() => {
		if (visible.current) setForcedDark(!!night);
	}, [night]);
	useIonViewWillEnter(() => {
		visible.current = true;
		setForcedDark(!!night);
	}, [night]);
	useIonViewWillLeave(() => {
		visible.current = false;
		setForcedDark(false);
	});

	if (night) {
		return (
			<IonPage>
				<IonContent fullscreen className='bin-night'>
					<BinNight
						night={night}
						after={upcoming.find((c) => c.key !== night.collection.key)}
						onDone={() => markPutOut(night.collection.key)}
						onProfile={() => history.push('/tabs/settings')}
					/>
				</IonContent>
			</IonPage>
		);
	}

	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='page today'>
					<div className='topbar'>
						<Logo />
						<button className='icon-btn' aria-label='Settings' onClick={() => history.push('/tabs/settings')}>
							<UserIcon />
						</button>
					</div>

					{!next ? (
						<Expired />
					) : (
						<>
							<div className='greet'>
								Good {timeOfDay(now)}
								{settings.name ? `, ${settings.name}` : ''}
							</div>
							<Hero collection={next} now={now} isOut={settings.putOut.includes(next.key)} moved={isMoved(settings.code, next)} />

							<button className='card remind-row' onClick={() => history.push('/tabs/settings/reminders')}>
								<span className='bell'>
									<BellIcon />
								</span>
								<span>
									{reminder ? (
										<>
											<span className='t1'>
												Reminder {reminderWhen(reminder.at, now)}
											</span>
											<span className='t2'>{reminder.kind === 'nightBefore' ? 'Night before collection' : 'Morning of collection'}</span>
										</>
									) : (
										<>
											<span className='t1'>Reminders are off</span>
											<span className='t2'>Tap to choose when to be reminded</span>
										</>
									)}
								</span>
								<span className='chev'>
									<ChevronRight />
								</span>
							</button>

							{upcoming.length > 1 && (
								<>
									<div className='section-title'>
										<h3>Coming up</h3>
										<button onClick={() => history.push('/tabs/schedule')}>Full schedule</button>
									</div>
									<div className='card upcoming'>
										{upcoming.slice(1, 4).map((c) => (
											<div className='up' key={c.key}>
												<div className='datebox'>
													<div className='dw'>{weekdayName(c.date, 'short').toUpperCase()}</div>
													<div className='dn'>{c.date.getDate()}</div>
													<div className='dm'>{c.date.toLocaleDateString('en-GB', { month: 'short' })}</div>
												</div>
												<BinChips bins={c.bins} />
												<div className='in'>{daysBetween(now, c.date)} days</div>
											</div>
										))}
									</div>
								</>
							)}
						</>
					)}
				</div>
			</IonContent>
		</IonPage>
	);
};

const Hero = ({ collection, now, isOut, moved }: { collection: Collection; now: Date; isOut: boolean; moved: boolean }) => {
	const days = daysBetween(now, collection.date);
	const [a, b, c] = BINS[collection.bins[0]].gradient;
	const multi = collection.bins.length > 1;
	return (
		<div
			className={multi ? 'hero multi' : 'hero'}
			style={{
				background: `radial-gradient(120% 90% at 85% 25%, ${a} 0%, ${b} 45%, ${c} 100%)`,
				boxShadow: `0 24px 40px -22px ${c}cc`,
			}}
		>
			<div className='when'>{moved ? 'Changed day' : 'Next collection'}</div>
			<div className='day'>{days === 0 ? 'Today' : days === 1 ? 'Tomorrow' : weekdayName(collection.date)}</div>
			<div className='date'>{days <= 1 ? `${weekdayName(collection.date)} ${dayMonth(collection.date)}` : dayMonth(collection.date)}</div>
			<div className='count'>
				{isOut ? (
					<>
						<CheckIcon size={15} /> Out
					</>
				) : (
					relativeDays(days)
				)}
			</div>
			<div className='label'>
				<div className='name'>{binsPhrase(collection.bins)}</div>
				{multi ? (
					collection.bins.map((bin) => (
						<div key={bin} className='what'>
							{BINS[bin].contents}
						</div>
					))
				) : (
					<div className='what'>{binsContents(collection.bins)}</div>
				)}
			</div>
			<div className='bins'>
				<BinGroup bins={collection.bins} size={multi ? 84 : 140} onColor />
			</div>
		</div>
	);
};

const Expired = () => (
	<div className='expired'>
		<h1 className='headline'>Your bin calendar has run out</h1>
		<p className='note'>
			Bindicator doesn't have any more collection dates for your code. Update the app from the App Store or Google Play to get the latest
			council calendar.
		</p>
	</div>
);
