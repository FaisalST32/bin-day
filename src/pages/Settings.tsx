import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonToast,
} from '@ionic/react';
import { arrowBackOutline, cog } from 'ionicons/icons';
import { Reminders } from '../components/Reminders/Reminders';
import './Settings.less';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { LocalNotifications } from '@capacitor/local-notifications';
import { CollectionType } from '../types/collection.types';
import { getNextCollection } from '../services/data.service';
import {
	changeReminderSettings,
	getCollectionCode,
	getReminderSettings,
} from '../services/settings.service';

export type SelectedDayType = 'collectionDay' | 'dayBefore';

export type RemindersSettingsType = {
	collectionDay: SelectedDayType;
	time?: TimeSlotType;
	enabled: boolean;
};

export type SettingsType = {
	reminders?: RemindersSettingsType;
};

export type TimeSlotType = {
	label: string;
	value: string;
};

export const SettingsPage = () => {
	const [settings, setSettings] = useState<SettingsType>({
		reminders: getReminderSettings(),
	});

	const history = useHistory();

	const onChangeSettings = useCallback((newSettings: SettingsType) => {
		setSettings(newSettings);
	}, []);

	const updateNotifications = useCallback(async (settings: SettingsType) => {
		const collectionCode = getCollectionCode();

		const nextCollection: CollectionType = getNextCollection(
			collectionCode
		) as CollectionType;

		const nextNotificationDate = new Date(
			nextCollection.date.toLocaleDateString() +
				' ' +
				settings.reminders?.time?.label
		);

		if (settings.reminders?.collectionDay === 'dayBefore') {
			nextNotificationDate.setDate(nextNotificationDate.getDate() - 1);
		}

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

		const date = new Date();
		date.setMinutes(date.getMinutes() + 1);
		const scheduled = await LocalNotifications.schedule({
			notifications: [
				{
					body: `Let's take those bins out!`,
					id: 1,
					title: 'Bin Time',
					autoCancel: true,
					schedule: {
						allowWhileIdle: true,
						at: date,
						every: 'minute',
					},
				},
			],
		});

		console.log('scheduled', scheduled);

		// LocalNotifications.schedule({
		// 	notifications: [
		// 		{
		// 			body: `Let's take those bins out!`,
		// 			id: 1,
		// 			title: 'Bin Time',
		// 			autoCancel: true,
		// 			schedule: {
		// 				allowWhileIdle: true,
		// 				at: nextNotificationDate,
		// 				every: 'week',
		// 			},
		// 		},
		// 	],
		// });
	}, []);

	const onSaveSettings = useCallback(async () => {
		changeReminderSettings(settings.reminders);
		// update notifications
		await updateNotifications(settings);

		present('Settings saved', 2000);
		history.push('/home');
	}, [settings]);

	const [present] = useIonToast();

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
							color='secondary'
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
					<div className='reminder-select'>
						<div className='section-header'>Reminders</div>
						<Reminders
							onChange={(
								reminderSettings: RemindersSettingsType
							) => {
								onChangeSettings({
									...(settings ?? {}),
									reminders: reminderSettings,
								});
							}}
							settings={settings?.reminders}
						/>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};
