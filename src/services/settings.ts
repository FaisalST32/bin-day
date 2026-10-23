import { BIN_KINDS, BinKind } from '../lib/bins';

export type ReminderSlot = {
	enabled: boolean;
	/** 24-hour "HH:mm" */
	time: string;
};

export type Settings = {
	code: string;
	name: string;
	reminders: {
		nightBefore: ReminderSlot;
		morningOf: ReminderSlot;
		bins: Record<BinKind, boolean>;
		holidayChanges: boolean;
	};
	/** Collection keys (YYYY-MM-DD) the user has marked as put out. */
	putOut: string[];
	/** App version the user chose to skip in the update sheet. */
	skippedVersion?: string;
};

const STORAGE_KEY = 'bindicator.settings.v2';

export const defaultSettings = (): Settings => ({
	code: '',
	name: '',
	reminders: {
		nightBefore: { enabled: true, time: '20:00' },
		morningOf: { enabled: false, time: '06:30' },
		bins: Object.fromEntries(BIN_KINDS.map((b) => [b, true])) as Record<BinKind, boolean>,
		holidayChanges: true,
	},
	putOut: [],
});

/** "8:00 PM" or "08:30 pm" -> "20:00" / "20:30" */
const to24h = (label?: string) => {
	const match = label?.match(/(\d{1,2}):(\d{2})\s*([ap]m)/i);
	if (!match) return;
	let hour = Number(match[1]) % 12;
	if (match[3].toLowerCase() === 'pm') hour += 12;
	return `${String(hour).padStart(2, '0')}:${match[2]}`;
};

/** Reads settings saved by versions up to 0.0.4. */
const migrateLegacy = (): Settings | undefined => {
	const code = localStorage.getItem('settings.collectionCode');
	if (!code) return;
	const settings = defaultSettings();
	settings.code = code;
	settings.name = localStorage.getItem('settings.profileName') ?? '';
	const legacy = localStorage.getItem('settings.reminders');
	if (legacy) {
		try {
			const old = JSON.parse(legacy) as {
				enabled?: boolean;
				collectionDay?: 'collectionDay' | 'dayBefore';
				time?: { value?: string };
			};
			const time = to24h(old.time?.value);
			const isMorning = old.collectionDay === 'collectionDay';
			settings.reminders.nightBefore = {
				enabled: !!old.enabled && !isMorning,
				time: !isMorning && time ? time : '20:00',
			};
			settings.reminders.morningOf = {
				enabled: !!old.enabled && isMorning,
				time: isMorning && time ? time : '06:30',
			};
		} catch {
			// Keep defaults if the old value is unreadable.
		}
	} else {
		settings.reminders.nightBefore.enabled = false;
	}
	return settings;
};

export const loadSettings = (): Settings => {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored) {
		try {
			const parsed = JSON.parse(stored) as Partial<Settings>;
			const defaults = defaultSettings();
			return {
				...defaults,
				...parsed,
				reminders: {
					...defaults.reminders,
					...parsed.reminders,
					bins: { ...defaults.reminders.bins, ...parsed.reminders?.bins },
				},
			};
		} catch {
			// Fall through to migration/defaults.
		}
	}
	const migrated = migrateLegacy();
	if (migrated) {
		saveSettings(migrated);
		return migrated;
	}
	return defaultSettings();
};

export const saveSettings = (settings: Settings) => {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
};
