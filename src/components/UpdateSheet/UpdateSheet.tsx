import { IonModal } from '@ionic/react';
import { useEffect, useState } from 'react';
import appIcon from '../../assets/brand/appicon.png';
import { AvailableUpdate, checkForUpdate, installUpdate } from '../../services/appUpdate';
import { getNext } from '../../services/schedule';
import { useAppState } from '../../state/AppState';
import './UpdateSheet.css';

/** Shown once per launch when the store has a newer version than the one installed. */
export const UpdateSheet = () => {
	const { settings, update } = useAppState();
	const [available, setAvailable] = useState<AvailableUpdate>();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			checkForUpdate()
				.then((u) => {
					if (!u) return;
					const outOfDates = !getNext(settings.code);
					if (u.version === settings.skippedVersion && !outOfDates) return;
					setAvailable(u);
					setOpen(true);
				})
				.catch((e) => console.warn('Update check failed', e));
		}, 1500);
		return () => clearTimeout(timer);
	}, []);

	if (!available) return null;

	const later = () => {
		update((s) => void (s.skippedVersion = available.version));
		setOpen(false);
	};

	return (
		<IonModal
			isOpen={open}
			onDidDismiss={() => setOpen(false)}
			className='sheet-modal'
			initialBreakpoint={1}
			breakpoints={[0, 1]}
			handle
		>
			<div className='sheet-body update-sheet'>
				<div className='upd-head'>
					<img src={appIcon} alt='' />
					<div>
						<span className='badge'>Update available</span>
						<div className='ver'>
							Version {available.version}
							{available.sizeMb ? ` · ${available.sizeMb} MB` : ''}
						</div>
					</div>
				</div>
				<h2>A new Bindicator is ready</h2>
				{available.notes?.length ? (
					<ul className='whatsnew'>
						{available.notes.slice(0, 4).map((n) => (
							<li key={n}>{n}</li>
						))}
					</ul>
				) : (
					<p className='lead'>Updates keep your collection dates current and bring the latest fixes.</p>
				)}
				<div className='note' style={{ marginBottom: 14 }}>
					<b>Check your code after updating.</b> Wigan sometimes changes collection days. If your council letter doesn't say{' '}
					<b>{settings.code}</b>, change it in Settings.
				</div>
				<button className='btn primary' onClick={() => installUpdate(available).finally(() => setOpen(false))}>
					Update now
				</button>
				<button className='btn ghost' onClick={later}>
					Later
				</button>
			</div>
		</IonModal>
	);
};
