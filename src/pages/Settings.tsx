import { LocalNotifications, Weekday } from '@capacitor/local-notifications';
import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonToast,
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { GeneralSettings } from '../components/GeneralSettings/GeneralSettings';
import { Reminders } from '../components/Reminders/Reminders';
import { getNextCollection } from '../services/data.service';
import { changeSettings, getSettings } from '../services/settings.service';
import { CollectionType } from '../types/collection.types';
import './Settings.less';

export type SelectedDayType = 'collectionDay' | 'dayBefore';

export type RemindersSettingsType = {
	collectionDay: SelectedDayType;
	time?: TimeSlotType;
	enabled: boolean;
};
export type GeneralSettingsType = {
	collectionCode: string;
	name: string;
};

export type SettingsType = {
	reminders?: RemindersSettingsType;
	general?: GeneralSettingsType;
};

export type TimeSlotType = {
	label: string;
	value: string;
};

export const SettingsPage = () => {
	const [settings, setSettings] = useState<SettingsType>();

	const history = useHistory();

	const onChangeSettings = useCallback(
		(newSettings: Partial<SettingsType>) => {
			setSettings((prev) => {
				return JSON.parse(JSON.stringify({ ...prev, ...newSettings }));
			});
		},
		[]
	);

	const updateNotifications = useCallback(async (settings: SettingsType) => {
		if (
			!settings.reminders?.enabled ||
			!settings.reminders.time ||
			!settings.reminders.collectionDay
		) {
			await clearPendingNotifications();
			return;
		}
		const nextCollection: CollectionType = getNextCollection(
			settings.general?.collectionCode ?? ''
		) as CollectionType;

		const nextNotificationDate = new Date(
			nextCollection.date.toDateString() +
				' ' +
				settings.reminders?.time?.value
		);

		if (settings.reminders?.collectionDay === 'dayBefore') {
			nextNotificationDate.setDate(nextNotificationDate.getDate() - 1);
		}

		await clearPendingNotifications();

		// const date = new Date();
		// date.setMinutes(date.getMinutes() + 1);
		// const scheduled = await LocalNotifications.schedule({
		// 	notifications: [
		// 		{
		// 			body: `Let's take those bins out!`,
		// 			id: 1,
		// 			title: 'Bin Time',
		// 			autoCancel: true,
		// 			schedule: {
		// 				allowWhileIdle: true,
		// 				// at: date,
		// 				// every: 'day',
		// 				repeats: true,
		// 				on: {
		// 					weekday: date.getDay() + 1,
		// 					hour: date.getHours(),
		// 					minute: date.getMinutes(),
		// 				},
		// 			},
		// 		},
		// 	],
		// });

		// console.log({ scheduled });
		console.log({
			weekday: nextNotificationDate.getDay() + 1,
			hour: nextNotificationDate.getHours(),
			minute: nextNotificationDate.getMinutes(),
		});

		LocalNotifications.schedule({
			notifications: [
				{
					body: `Let's take those bins out!`,
					id: 1,
					title: `It's bin time!`,
					autoCancel: true,

					schedule: {
						allowWhileIdle: true,
						// repeats: true,
						// every: 'week',
						// at: nextNotificationDate,
						on: {
							weekday: nextNotificationDate.getDay() + 1,
							hour: nextNotificationDate.getHours(),
							minute: nextNotificationDate.getMinutes(),
							// hour: nextNotificationDate.getHours(),
							// minute: nextNotificationDate.getMinutes(),
						},
					},
				},
			],
		});
	}, []);

	const clearPendingNotifications = useCallback(async () => {
		const hasNotificationSettings =
			await LocalNotifications.checkPermissions();
		console.log('check-noti', hasNotificationSettings);
		if (hasNotificationSettings.display !== 'granted') {
			const hasPermission = await LocalNotifications.requestPermissions();
			if (hasPermission.display !== 'granted') {
				console.log('noti-after', hasPermission);
				present('Check your notification settings', 2000);
				return;
			}
		}
		const pending = await LocalNotifications.getPending();
		console.log({ pending });

		if (pending.notifications.length > 0) {
			await LocalNotifications.cancel({
				notifications: pending.notifications,
			});
		}
	}, []);

	const onSaveSettings = useCallback(async () => {
		if (!settings) {
			return;
		}
		changeSettings(settings);
		// update notifications
		await updateNotifications(settings);

		present('Settings saved', 2000);
		history.push('/home');
	}, [settings]);

	const [present] = useIonToast();

	useEffect(() => {
		setSettings(getSettings());
	}, []);

	return (
		<IonPage className='settings-root'>
			<IonHeader className='icon-header ion-no-border'>
				<IonToolbar color='red'>
					<IonButtons slot='start'>
						<IonBackButton
							icon={arrowBackOutline}
							text={''}
						></IonBackButton>
					</IonButtons>
					<IonButtons slot='end'>
						<IonButton
							onClick={onSaveSettings}
							color='primary'
							fill='clear'
						>
							Save
						</IonButton>
					</IonButtons>
					<IonTitle></IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className='settings-content'>
					<div className='section-header'>General</div>
					<GeneralSettings
						onChange={(generalSettings: GeneralSettingsType) => {
							onChangeSettings({
								general: generalSettings,
							});
						}}
						settings={settings?.general}
					/>
					<div className='section-header'>Reminders</div>
					<Reminders
						onChange={(reminderSettings: RemindersSettingsType) => {
							onChangeSettings({
								reminders: reminderSettings,
							});
						}}
						settings={settings?.reminders}
					/>
				</div>
			</IonContent>
		</IonPage>
	);
};
