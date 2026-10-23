import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { BinKind, mascotPicture } from '../lib/bins';
import { planReminders } from './reminders';
import { Settings } from './settings';

const CHANNEL = 'bindicator-channel';
export const PUT_OUT_ACTION_TYPE = 'BIN_NIGHT';
export const PUT_OUT_ACTION = 'put-out';

const native = () => Capacitor.isNativePlatform();

export const requestNotificationPermission = async () => {
	if (!native()) return false;
	const current = await LocalNotifications.checkPermissions();
	if (current.display === 'granted') return true;
	const asked = await LocalNotifications.requestPermissions();
	return asked.display === 'granted';
};

let prepared = false;

const prepare = async () => {
	if (prepared) return;
	if (Capacitor.getPlatform() === 'android') {
		await LocalNotifications.createChannel({
			id: CHANNEL,
			name: 'Bin reminders',
			description: 'Reminders to put your bins out',
			importance: 4,
			sound: 'chime.wav',
			vibration: true,
			visibility: 1,
		});
	}
	await LocalNotifications.registerActionTypes({
		types: [
			{
				id: PUT_OUT_ACTION_TYPE,
				actions: [{ id: PUT_OUT_ACTION, title: "Done, it's out" }],
			},
		],
	});
	prepared = true;
};

/**
 * Android 12+ only allows exact alarms if the user has switched them on. Asking for exact alarms
 * without that permission makes the plugin open the system settings page on every schedule call,
 * so fall back to inexact alarms (usually within a few minutes) instead.
 */
const exactAlarmsAllowed = async () => {
	if (Capacitor.getPlatform() !== 'android') return true;
	try {
		return (await LocalNotifications.checkExactNotificationSetting()).exact_alarm === 'granted';
	} catch {
		return false;
	}
};

/** Replaces all pending notifications with the current reminder plan. */
export const scheduleReminders = async (settings: Settings) => {
	if (!native()) return;
	const permission = await LocalNotifications.checkPermissions();
	if (permission.display !== 'granted') return;
	await prepare();

	const pending = await LocalNotifications.getPending();
	if (pending.notifications.length) {
		await LocalNotifications.cancel({ notifications: pending.notifications.map((n) => ({ id: n.id })) });
	}

	const plan = planReminders(settings).slice(0, 60);
	if (!plan.length) return;
	const exact = await exactAlarmsAllowed();
	const notifications = (pictures: boolean) =>
		plan.map((r) => ({
			id: r.id,
			title: r.title,
			body: r.body,
			sound: 'chime.wav',
			channelId: CHANNEL,
			autoCancel: true,
			actionTypeId: r.kind === 'nightBefore' ? PUT_OUT_ACTION_TYPE : undefined,
			extra: { kind: r.kind, collectionKey: r.collectionKey },
			schedule: { at: r.at, allowWhileIdle: true },
			isExactNotification: exact,
			...(pictures ? mascot(r.bins) : {}),
		}));
	try {
		await LocalNotifications.schedule({ notifications: notifications(true) });
	} catch (e) {
		// A missing picture fails the whole batch, so never let it cost the user their reminders.
		console.warn('Scheduling with pictures failed, retrying without', e);
		await LocalNotifications.schedule({ notifications: notifications(false) });
	}
};

/** The bin mascot picture: an iOS attachment, or the large icon on Android. */
const mascot = (bins?: BinKind[]) => {
	const name = mascotPicture(bins);
	return Capacitor.getPlatform() === 'ios'
		? { attachments: [{ id: 'mascot', url: `res:///notifications/${name}.jpg` }] }
		: { largeIcon: `notif_${name.replace(/-/g, '_')}` };
};

/** Calls back when the user taps "Done, it's out" on a night-before notification. */
export const onPutOutAction = (handler: (collectionKey: string) => void) =>
	LocalNotifications.addListener('localNotificationActionPerformed', (event) => {
		const key = event.notification.extra?.collectionKey;
		if (event.actionId === PUT_OUT_ACTION && key) handler(key);
	});
