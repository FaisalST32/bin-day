import {
	GeneralSettingsType,
	RemindersSettingsType,
	SettingsType,
} from '../pages/Settings';

export const changeCollectionCode = (collectionCode?: string) => {
	localStorage.setItem('settings.collectionCode', collectionCode || '');
};

export const getCollectionCode = (): string => {
	const code = localStorage.getItem('settings.collectionCode') ?? '';
	return code;
};

export const changeSettings = (settings?: SettingsType) => {
	changeReminderSettings(settings?.reminders);
	changeGeneralSettings(settings?.general);
};

export const changeReminderSettings = (
	reminderSettings?: RemindersSettingsType
) => {
	const settingsStringified = reminderSettings
		? JSON.stringify(reminderSettings)
		: '';
	window.localStorage.setItem('settings.reminders', settingsStringified);
};

export const changeGeneralSettings = (
	generalSettings?: GeneralSettingsType
) => {
	changeCollectionCode(generalSettings?.collectionCode);
	localStorage.setItem('settings.profileName', generalSettings?.name || '');
};

export const getReminderSettings = (): RemindersSettingsType | undefined => {
	const settingsStringified =
		window.localStorage.getItem('settings.reminders');
	if (settingsStringified) {
		return JSON.parse(settingsStringified);
	}
};
export const getGeneralSettings = (): GeneralSettingsType | undefined => {
	const collectionCode = getCollectionCode();
	const name = localStorage.getItem('settings.profileName') ?? '';
	return {
		collectionCode,
		name,
	};
};

export const getSettings = (): SettingsType => {
	const settings = {
		reminders: getReminderSettings(),
		general: getGeneralSettings(),
	};
	return settings;
};
