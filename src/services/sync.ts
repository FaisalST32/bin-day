import { scheduleReminders } from './notifications';
import { Settings } from './settings';
import { pushWidgetData, syncBinNight } from './widgets';

let timer: ReturnType<typeof setTimeout> | undefined;

/** Pushes settings-derived state to the device: reminders, widgets and the bin-night Live Activity. */
export const syncDevice = (settings: Settings, now = new Date()) => {
	clearTimeout(timer);
	timer = setTimeout(() => {
		scheduleReminders(settings).catch((e) => console.warn('Scheduling reminders failed', e));
		pushWidgetData(settings).catch((e) => console.warn('Updating widgets failed', e));
		syncBinNight(settings, now).catch((e) => console.warn('Updating Live Activity failed', e));
	}, 400);
};
