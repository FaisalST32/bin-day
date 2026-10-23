import { loadSettings } from './settings';

describe('loadSettings', () => {
	beforeEach(() => localStorage.clear());

	test('new users get defaults', () => {
		const s = loadSettings();
		expect(s.code).toBe('');
		expect(s.reminders.nightBefore).toEqual({ enabled: true, time: '20:00' });
	});

	test('migrates a 0.0.4 night-before reminder', () => {
		localStorage.setItem('settings.collectionCode', 'FRIDDG');
		localStorage.setItem('settings.profileName', 'Muzafar');
		localStorage.setItem(
			'settings.reminders',
			JSON.stringify({ enabled: true, collectionDay: 'dayBefore', time: { label: '2 PM', value: '2:00 PM' } })
		);
		const s = loadSettings();
		expect(s.code).toBe('FRIDDG');
		expect(s.name).toBe('Muzafar');
		expect(s.reminders.nightBefore).toEqual({ enabled: true, time: '14:00' });
		expect(s.reminders.morningOf.enabled).toBe(false);
		expect(localStorage.getItem('bindicator.settings.v2')).not.toBeNull();
	});

	test('migrates a 0.0.4 collection-day reminder', () => {
		localStorage.setItem('settings.collectionCode', 'THUDD');
		localStorage.setItem(
			'settings.reminders',
			JSON.stringify({ enabled: true, collectionDay: 'collectionDay', time: { value: '6:00 AM' } })
		);
		const s = loadSettings();
		expect(s.reminders.morningOf).toEqual({ enabled: true, time: '06:00' });
		expect(s.reminders.nightBefore.enabled).toBe(false);
	});

	test('existing users without reminders are not opted in', () => {
		localStorage.setItem('settings.collectionCode', 'FRIDDG');
		const s = loadSettings();
		expect(s.reminders.nightBefore.enabled).toBe(false);
		expect(s.reminders.morningOf.enabled).toBe(false);
	});
});
