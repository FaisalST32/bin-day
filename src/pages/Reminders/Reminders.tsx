import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { IonContent, IonPage, IonToggle, useIonViewWillEnter } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import appIcon from '../../assets/brand/appicon.png';
import { BinIcon } from '../../components/BinIcon';
import { ChevronLeft } from '../../components/Icons';
import { TimeField } from '../../components/TimeField';
import { BIN_KINDS, BINS, mascotPicture } from '../../lib/bins';
import { formatTime, weekdayName } from '../../lib/dates';
import { useIsDark } from '../../lib/useTheme';
import { requestNotificationPermission } from '../../services/notifications';
import { planReminders } from '../../services/reminders';
import { getNext, nightBefore } from '../../services/schedule';
import { useAppState } from '../../state/AppState';
import './Reminders.css';

type Slot = 'nightBefore' | 'morningOf';

export const RemindersPage = () => {
	const { settings, update } = useAppState();
	const history = useHistory();
	const dark = useIsDark();
	const [blocked, setBlocked] = useState(false);	const { reminders } = settings;
	const next = getNext(settings.code);

	useIonViewWillEnter(() => {
		if (!Capacitor.isNativePlatform()) return;
		LocalNotifications.checkPermissions().then((p) => setBlocked(p.display === 'denied'));
	});

	const setSlot = async (slot: Slot, change: Partial<typeof reminders.nightBefore>) => {
		if (change.enabled) {
			const granted = await requestNotificationPermission();
			setBlocked(Capacitor.isNativePlatform() && !granted);
		}
		update((s) => void (s.reminders[slot] = { ...s.reminders[slot], ...change }));
	};

	const preview = planReminders(settings).find((r) => r.kind === 'nightBefore' || r.kind === 'morningOf');
	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='page reminders'>
					<div className='topbar'>
						<button className='link-btn back' onClick={() => history.goBack()}>
							<ChevronLeft /> Settings
						</button>
					</div>
					<div className='page-title' style={{ margin: '0 4px 14px' }}>
						Reminders
					</div>

					{blocked && (
						<div className='note' style={{ marginBottom: 12 }}>
							<b>Notifications are turned off for Bindicator.</b> Turn them on in your phone's Settings app to get reminders.
						</div>
					)}

					{preview && (
						<div className='preview-wrap'>
							<div className='cap'>You'll see</div>
							<div className='notif'>
								<img className='appic' src={appIcon} alt='' />
								<div style={{ flex: 1 }}>
									<div className='top'>
										<span>BINDICATOR</span>
										<span>
											{weekdayName(preview.at, 'short')} {formatTime(`${preview.at.getHours()}:${preview.at.getMinutes()}`)}
										</span>
									</div>
									<b>{preview.title}</b>
									<p>{preview.body}</p>
								</div>
								<img className='thumb' src={`${import.meta.env.BASE_URL}notifications/${mascotPicture(preview.bins)}.jpg`} alt='' />
							</div>
						</div>
					)}

					<div className='group-label'>When</div>
					<div className='group'>
						{(
							[
								['nightBefore', 'Night before', next ? weekdayName(nightBefore(next)) : 'Evening before'],
								['morningOf', 'Morning of', next ? weekdayName(next.date) : 'Collection day'],
							] as [Slot, string, string][]
						).map(([slot, title, sub]) => (
							<div className='row' key={slot}>
								<div>
									<div className='t'>{title}</div>
									<div className='s'>{sub}</div>
								</div>
								<div className='end'>
									<TimeField value={reminders[slot].time} onChange={(time) => setSlot(slot, { time })} disabled={!reminders[slot].enabled} />
									<IonToggle
										aria-label={title}
										checked={reminders[slot].enabled}
										onIonChange={(e) => setSlot(slot, { enabled: e.detail.checked })}
									/>
								</div>
							</div>
						))}
					</div>

					<div className='group-label'>Remind me about</div>
					<div className='group'>
						<div className='binpick'>
							{BIN_KINDS.map((bin) => (
								<button
									key={bin}
									className={reminders.bins[bin] ? 'on' : ''}
									aria-pressed={reminders.bins[bin]}
									onClick={() => update((s) => void (s.reminders.bins[bin] = !s.reminders.bins[bin]))}
								>
									<BinIcon kind={bin} size={34} dark={dark} dimmed={!reminders.bins[bin]} />
									{BINS[bin].label}
								</button>
							))}
						</div>
						<div className='row'>
							<div>
								<div className='t'>Holiday changes</div>
								<div className='s'>Tell me when a collection day moves</div>
							</div>
							<div className='end'>
								<IonToggle
									aria-label='Holiday changes'
									checked={reminders.holidayChanges}
									onIonChange={(e) => update((s) => void (s.reminders.holidayChanges = e.detail.checked))}
								/>
							</div>
						</div>
					</div>				</div>
			</IonContent>
		</IonPage>
	);
};
