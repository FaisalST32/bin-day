import { IonDatetime, IonModal, IonToggle } from '@ionic/react';
import { useCallback, useMemo, useState } from 'react';
import './Reminders.less';
import {
	RemindersSettingsType,
	SelectedDayType,
	TimeSlotType,
} from '../../pages/Settings';

const dayBeforeTimeSlots: TimeSlotType[] = [
	{ label: '2 PM', value: '2:00 PM' },
	{ label: '3 PM', value: '3:00 PM' },
	{ label: '4 PM', value: '4:00 PM' },
	{ label: '5 PM', value: '5:00 PM' },
	{ label: '6 PM', value: '6:00 PM' },
	{ label: '7 PM', value: '7:00 PM' },
	{ label: '8 PM', value: '8:00 PM' },
];

const collectionDayTimeSlots: TimeSlotType[] = [
	{ label: '6 AM', value: '6:00 AM' },
	{ label: '7 AM', value: '7:00 AM' },
	{ label: '8 AM', value: '8:00 AM' },
	{ label: '9 AM', value: '9:00 AM' },
	{ label: '10 AM', value: '10:00 AM' },
	{ label: '11 AM', value: '11:00 AM' },
];

export type RemindersProps = {
	onChange: (reminderSettings: RemindersSettingsType) => void;
	settings: RemindersSettingsType | undefined;
};

export const Reminders: React.FC<RemindersProps> = (props: RemindersProps) => {
	const [showCustomTime, setShowCustomTime] = useState<boolean>(false);

	const onToggleReminders = useCallback(
		(isChecked: boolean) => {
			props.onChange({
				...(props?.settings ?? {}),
				enabled: isChecked,
			} as RemindersSettingsType);
		},
		[props.settings]
	);

	const onChangeSelectedDay = useCallback(
		(day: SelectedDayType) => {
			props.onChange({
				...(props?.settings ?? {}),
				collectionDay: day,
				time: undefined,
			} as RemindersSettingsType);
		},
		[props.settings]
	);

	const onChangeTimeSlot = useCallback(
		(slot: TimeSlotType) => {
			props.onChange({
				...(props?.settings ?? {}),
				time: { ...slot },
			} as RemindersSettingsType);
		},
		[props.settings]
	);

	const timeSlots: TimeSlotType[] | undefined = useMemo(() => {
		return props.settings?.collectionDay === 'collectionDay'
			? collectionDayTimeSlots
			: props.settings?.collectionDay === 'dayBefore'
			? dayBeforeTimeSlots
			: undefined;
	}, [props.settings]);
	console.log(props.settings);

	return (
		<>
			<div className='reminders-root'>
				<div className='enable-toggle'>
					<IonToggle
						onIonChange={(e) => {
							onToggleReminders(e.target.checked);
						}}
						className='reminders-toggle'
						justify='space-between'
					>
						Enable Reminders
					</IonToggle>
				</div>
				{!!props.settings?.enabled && (
					<>
						<div className='day-label'>
							When would you like to be reminded?
						</div>
						<div className='days-select'>
							<div
								className={[
									'day',
									props.settings.collectionDay ===
									'collectionDay'
										? 'selected'
										: '',
								].join(' ')}
								role='button'
								onClick={() => {
									onChangeSelectedDay('collectionDay');
								}}
							>
								Collection Day
							</div>
							<div
								className={[
									'day',
									props.settings.collectionDay === 'dayBefore'
										? 'selected'
										: '',
								].join(' ')}
								onClick={() => {
									onChangeSelectedDay('dayBefore');
								}}
							>
								A Day Before
							</div>
						</div>
						{!!timeSlots && (
							<>
								<div className='day-label'>Pick a time</div>
								<div className='time-slots'>
									{timeSlots.map((timeSlot) => {
										return (
											<div
												key={timeSlot.label}
												className={[
													'time-slot',
													timeSlot.label ===
													props.settings?.time?.label
														? 'selected'
														: '',
												].join(' ')}
												onClick={() => {
													onChangeTimeSlot(timeSlot);
												}}
											>
												{timeSlot.label}
											</div>
										);
									})}
									<div
										className={[
											'time-slot',
											props.settings?.time?.label &&
											timeSlots.filter(
												(t) =>
													t.label ===
													props.settings?.time?.label
											).length === 0
												? 'selected'
												: '',
										].join(' ')}
										onClick={() => {
											setShowCustomTime(true);
										}}
									>
										Custom{' '}
										{timeSlots.filter(
											(t) =>
												t.label ===
												props.settings?.time?.label
										).length === 0 &&
											props.settings?.time?.label}
									</div>
								</div>
							</>
						)}
					</>
				)}
			</div>
			<IonModal
				initialBreakpoint={1}
				breakpoints={[0, 1]}
				keepContentsMounted={true}
				isOpen={showCustomTime}
				onIonModalDidDismiss={() => {
					setShowCustomTime(false);
				}}
				canDismiss
				backdropDismiss
			>
				<div className='time-picker'>
					<IonDatetime
						onIonChange={(e) => {
							const time = new Date(
								e.detail.value as string
							).toLocaleTimeString('en-US', {
								hour: '2-digit',
								minute: '2-digit',
							});
							onChangeTimeSlot({ label: time, value: time });
						}}
						presentation='time'
					></IonDatetime>
				</div>
			</IonModal>
		</>
	);
};
