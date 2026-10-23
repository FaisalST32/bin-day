import { BinKind, binsPhrase } from '../lib/bins';
import { addDays, parseTime, shortDate, weekdayName } from '../lib/dates';
import { BIN_NIGHT_START, Collection, getBinNight, getLastDate, getUpcoming, isMoved, nightBefore } from './schedule';
import { Settings } from './settings';

export type ReminderKind = 'nightBefore' | 'morningOf' | 'moved' | 'expiry';

export type PlannedReminder = {
	id: number;
	kind: ReminderKind;
	at: Date;
	title: string;
	body: string;
	collectionKey?: string;
	/** Bins pictured on the notification; none means the app mascot. */
	bins?: BinKind[];
};

/** How far ahead to schedule; iOS keeps at most 64 pending notifications. */
const HORIZON_DAYS = 56;
const KIND_INDEX: Record<ReminderKind, number> = { nightBefore: 1, morningOf: 2, moved: 3, expiry: 4 };

const at = (day: Date, time: string) => {
	const { hour, minute } = parseTime(time);
	return new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour, minute);
};

const idFor = (key: string, kind: ReminderKind) =>
	Number(key.replace(/-/g, '').slice(2)) * 10 + KIND_INDEX[kind];

/** Bin night for the user's settings: it begins when their night-before reminder goes off. */
export const binNightFor = (settings: Settings, now = new Date()) => {
	const { nightBefore } = settings.reminders;
	return getBinNight(settings.code, now, nightBefore.enabled ? nightBefore.time : BIN_NIGHT_START);
};

export const remindedBins = (settings: Settings, c: Collection): BinKind[] =>
	c.bins.filter((b) => settings.reminders.bins[b]);

export const planReminders = (settings: Settings, now = new Date()): PlannedReminder[] => {
	const { reminders, code } = settings;
	const horizon = addDays(now, HORIZON_DAYS);
	const plan: PlannedReminder[] = [];

	for (const c of getUpcoming(code, now)) {
		if (c.date > horizon) break;
		const bins = remindedBins(settings, c);
		if (!bins.length) continue;
		const phrase = binsPhrase(bins);
		const plural = bins.length > 1;
		const moved = isMoved(code, c);
		const movedNote = moved ? ` Heads up: it's a ${weekdayName(c.date)} this week.` : '';

		if (reminders.nightBefore.enabled && !settings.putOut.includes(c.key)) {
			plan.push({
				id: idFor(c.key, 'nightBefore'),
				kind: 'nightBefore',
				at: at(nightBefore(c), reminders.nightBefore.time),
				title: `${phrase} tomorrow`,
				body: `Time to wheel ${plural ? 'them' : 'it'} out 🌙 Collections start at 6 am.${movedNote}`,
				collectionKey: c.key,
				bins,
			});
		}
		if (reminders.morningOf.enabled) {
			plan.push({
				id: idFor(c.key, 'morningOf'),
				kind: 'morningOf',
				at: at(c.date, reminders.morningOf.time),
				title: `${phrase} today`,
				body: `It's bin day! 🚛 Make sure ${plural ? "they're" : "it's"} out.`,
				collectionKey: c.key,
				bins,
			});
		}
		if (reminders.holidayChanges && moved) {
			plan.push({
				id: idFor(c.key, 'moved'),
				kind: 'moved',
				at: at(addDays(c.date, -3), '18:00'),
				title: `📅 Bin day moves this week`,
				body: `Your ${phrase} will be collected on ${shortDate(c.date)} instead of the usual day.`,
				collectionKey: c.key,
				bins,
			});
		}
	}

	const last = getLastDate(code);
	if (last) {
		const warnAt = at(addDays(last, -21), '10:00');
		plan.push({
			id: 9_999_991,
			kind: 'expiry',
			at: warnAt,
			title: 'Your bin calendar runs out soon',
			body: `Bindicator has dates up to ${shortDate(last)}. Update the app to get the new council calendar 🗓️`,
		});
	}

	return plan.filter((r) => r.at > now).sort((a, b) => a.at.getTime() - b.at.getTime());
};

/** The next night-before or morning-of reminder, for display. */
export const nextReminder = (settings: Settings, now = new Date()) =>
	planReminders(settings, now).find((r) => r.kind === 'nightBefore' || r.kind === 'morningOf');
