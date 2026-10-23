import { mascotPicture } from '../lib/bins';
import { binNightFor, planReminders } from './reminders';
import { getBinNight, getNext } from './schedule';
import { defaultSettings } from './settings';

const settings = () => ({ ...defaultSettings(), code: 'FRIDDG' });
const sunday = new Date(2026, 9, 11, 12, 0);

describe('schedule', () => {
	test('next FRIDDG collection after Sun 11 Oct 2026 is the blue bin on Fri 16 Oct', () => {
		const next = getNext('FRIDDG', sunday)!;
		expect(next.key).toBe('2026-10-16');
		expect(next.bins).toEqual(['blue']);
	});

	test('bin night runs from 6pm the evening before until 7am on the day', () => {
		expect(getBinNight('FRIDDG', new Date(2026, 9, 15, 17, 59))).toBeUndefined();
		expect(getBinNight('FRIDDG', new Date(2026, 9, 15, 18, 0))?.phase).toBe('tonight');
		expect(getBinNight('FRIDDG', new Date(2026, 9, 16, 6, 59))?.phase).toBe('morning');
		expect(getBinNight('FRIDDG', new Date(2026, 9, 16, 7, 0))).toBeUndefined();
	});

	test('bin night starts at the night-before reminder time', () => {
		const s = settings();
		s.reminders.nightBefore.time = '20:30';
		expect(binNightFor(s, new Date(2026, 9, 15, 20, 29))).toBeUndefined();
		expect(binNightFor(s, new Date(2026, 9, 15, 20, 30))?.phase).toBe('tonight');
		s.reminders.nightBefore.enabled = false;
		expect(binNightFor(s, new Date(2026, 9, 15, 18, 0))?.phase).toBe('tonight');
	});
});

describe('planReminders', () => {
	test('night-before reminders name the bins and fire at the chosen time', () => {
		const first = planReminders(settings(), sunday)[0];
		expect(first.title).toBe('Blue bin tomorrow');
		expect(first.at).toEqual(new Date(2026, 9, 15, 20, 0));
		expect(first.id).toBe(2610161);
	});

	test('no night-before reminder once the bin is marked out', () => {
		const s = { ...settings(), putOut: ['2026-10-16'] };
		const plan = planReminders(s, sunday);
		expect(plan.find((r) => r.collectionKey === '2026-10-16' && r.kind === 'nightBefore')).toBeUndefined();
	});

	test('switched-off bins are left out of the reminder text', () => {
		const s = settings();
		s.reminders.bins.green = false;
		const plan = planReminders(s, sunday);
		const oct23 = plan.find((r) => r.collectionKey === '2026-10-23' && r.kind === 'nightBefore')!;
		expect(oct23.title).toBe('Black bin tomorrow');
	});

	test('stays within the iOS pending notification limit and int32 ids', () => {
		const s = settings();
		s.reminders.morningOf.enabled = true;
		const plan = planReminders(s, sunday);
		expect(plan.length).toBeLessThanOrEqual(64);
		expect(plan.every((r) => r.id < 2 ** 31)).toBe(true);
		expect(new Set(plan.map((r) => r.id)).size).toBe(plan.length);
	});

	test('reminders carry the bins for the mascot picture', () => {
		const plan = planReminders(settings(), sunday);
		const oct23 = plan.find((r) => r.collectionKey === '2026-10-23' && r.kind === 'nightBefore')!;
		expect(mascotPicture(oct23.bins)).toBe('black-green');
		expect(mascotPicture(['green', 'blue'])).toBe('blue-green');
		expect(mascotPicture(['blue', 'brown'])).toBe('blue');
		expect(mascotPicture(plan.find((r) => r.kind === 'expiry')?.bins)).toBe('bindicator');
	});

	test('the Christmas move gets an advance warning', () => {
		const plan = planReminders(settings(), new Date(2026, 11, 1));
		const moved = plan.find((r) => r.kind === 'moved');
		expect(moved?.collectionKey).toBe('2026-12-24');
	});
});
