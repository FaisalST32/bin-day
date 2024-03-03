import { RemindersSettingsType } from '../pages/Settings';

export const changeCollectionCode = (collectionCode?: string) => {
	localStorage.setItem('settings.collectionCode', collectionCode || '');
};

export const getCollectionCode = (): string => {
	return localStorage.getItem('settings.collectionCode') ?? '';
};

export const changeReminderSettings = (
	reminderSettings?: RemindersSettingsType
) => {
	const settingsStringified = reminderSettings
		? JSON.stringify(reminderSettings)
		: '';
	window.localStorage.setItem('settings.reminders', settingsStringified);
};

export const getReminderSettings = (): RemindersSettingsType | undefined => {
	const settingsStringified =
		window.localStorage.getItem('settings.reminders');
	if (settingsStringified) {
		return JSON.parse(settingsStringified);
	}
};
