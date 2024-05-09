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
import { Capacitor } from '@capacitor/core';

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
			await prepareNotifications();
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

		await prepareNotifications();

		LocalNotifications.schedule({
			notifications: [
				{
					body: `Let's take those bins out!`,
					id: 1,
					title: `It's bin time!`,
					autoCancel: true,
					sound: 'chime.wav',
					channelId: 'bindicator-channel',
					schedule: {
						allowWhileIdle: true,
						on: {
							weekday: nextNotificationDate.getDay() + 1,
							hour: nextNotificationDate.getHours(),
							minute: nextNotificationDate.getMinutes(),
						},
					},
				},
			],
		});
	}, []);

	const addAndroidNotificationChannel = useCallback(async () => {
		const platform = Capacitor.getPlatform();
		if (platform !== 'android') {
			return;
		}
		const channelsList = await LocalNotifications.listChannels();
		if (
			!channelsList?.channels?.length ||
			!channelsList.channels.some((c) => c.id === 'bindicator-channel')
		) {
			await LocalNotifications.createChannel({
				id: 'bindicator-channel',
				name: 'Default',
				importance: 5,
				description: 'Default channel',
				sound: 'chime.wav',
				vibration: true,
				visibility: 1,
			});
		}
	}, []);

	const prepareNotifications = useCallback(async () => {
		const hasNotificationSettings =
			await LocalNotifications.checkPermissions();
		if (hasNotificationSettings.display !== 'granted') {
			const hasPermission = await LocalNotifications.requestPermissions();

			if (hasPermission.display !== 'granted') {
				present('Check your notification settings', 2000);
				return;
			} else {
				await addAndroidNotificationChannel();
			}
		}
		const pending = await LocalNotifications.getPending();

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
