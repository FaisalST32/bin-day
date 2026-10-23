import { App as CapApp } from '@capacitor/app';
import { IonContent, IonModal, IonPage } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ChevronRight } from '../../components/Icons';
import { formatTime, monthName, weekdayNameOf } from '../../lib/dates';
import { openStore } from '../../services/appUpdate';
import { getLastDate, getUsualWeekday, TEST_CODE } from '../../services/schedule';
import { Settings } from '../../services/settings';
import { useAppState } from '../../state/AppState';
import { CodeStep } from '../Onboarding/Onboarding';
import '../Onboarding/Onboarding.css';
import './Settings.css';

export const reminderSummary = (r: Settings['reminders']) => {
	const parts = [
		r.nightBefore.enabled && `Night before, ${formatTime(r.nightBefore.time)}`,
		r.morningOf.enabled && `Morning of, ${formatTime(r.morningOf.time)}`,
	].filter(Boolean);
	return parts.length ? parts.join(' · ') : 'Off';
};

export const SettingsPage = () => {
	const { settings, update } = useAppState();
	const history = useHistory();
	const [codeOpen, setCodeOpen] = useState(false);
	const [draftCode, setDraftCode] = useState('');
	const [version, setVersion] = useState<string>();
	const last = getLastDate(settings.code);

	useEffect(() => {
		CapApp.getInfo()
			.then((info) => setVersion(`${info.version} (${info.build})`))
			.catch(() => setVersion('web'));
	}, []);

	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='page settings'>
					<div className='topbar'>
						<span className='page-title'>Settings</span>
					</div>

					<div className='group-label'>You</div>
					<div className='group'>
						<label className='row'>
							<div className='t'>Name</div>
							<input
								className='inline-input'
								value={settings.name}
								placeholder='Optional'
								autoComplete='given-name'
								onChange={(e) => update((s) => void (s.name = e.target.value))}
							/>
						</label>
						<button
							className='row'
							onClick={() => {
								setDraftCode('');
								setCodeOpen(true);
							}}
						>
							<div>
								<div className='t'>Collection code</div>
								<div className='s'>{settings.code === TEST_CODE ? 'Daily' : weekdayNameOf(getUsualWeekday(settings.code))} collections</div>
							</div>
							<div className='end'>
								<b style={{ color: 'var(--ink)' }}>{settings.code}</b>
								<ChevronRight />
							</div>
						</button>
					</div>

					<div className='group-label'>Notifications</div>
					<div className='group'>
						<button className='row' onClick={() => history.push('/tabs/settings/reminders')}>
							<div>
								<div className='t'>Reminders</div>
								<div className='s'>{reminderSummary(settings.reminders)}</div>
							</div>
							<div className='end'>
								<ChevronRight />
							</div>
						</button>
					</div>

					<div className='group-label'>About</div>
					<div className='group'>
						<div className='row'>
							<div className='t'>Calendar</div>
							<div className='end'>{last ? `Up to ${monthName(last)} ${last.getFullYear()}` : 'No dates'}</div>
						</div>
						<button className='row' onClick={() => openStore()}>
							<div className='t'>Check for updates</div>
							<div className='end'>
								{version}
								<ChevronRight />
							</div>
						</button>
						<a className='row' href='https://www.wigan.gov.uk/MyBinCollection' target='_blank' rel='noreferrer'>
							<div className='t'>Check your day on Wigan Council</div>
							<div className='end'>
								<ChevronRight />
							</div>
						</a>
					</div>
					<p className='fine'>Bindicator isn't run by Wigan Council. Dates come from the council's published calendars.</p>
				</div>

				<IonModal isOpen={codeOpen} onDidDismiss={() => setCodeOpen(false)}>
					<IonContent>
						<div className='onboarding'>
							<div className='ob-top'>
								<button className='link-btn' onClick={() => setCodeOpen(false)}>
									Cancel
								</button>
							</div>
							<CodeStep
								code={draftCode}
								setCode={setDraftCode}
								nextLabel='Save'
								onNext={() => {
									update((s) => {
										s.code = draftCode;
										s.putOut = [];
									});
									setCodeOpen(false);
								}}
							/>
						</div>
					</IonContent>
				</IonModal>
			</IonContent>
		</IonPage>
	);
};
