const DAY_MS = 24 * 60 * 60 * 1000;

const ukDateKey = new Intl.DateTimeFormat('en-CA', {
	timeZone: 'Europe/London',
	year: 'numeric',
	month: '2-digit',
	day: '2-digit',
});

/** Calendar date (YYYY-MM-DD) of an instant, as seen in the UK. */
export const toUkKey = (instant: Date | string) =>
	ukDateKey.format(new Date(instant));

/** Local-midnight Date for a YYYY-MM-DD key. */
export const fromKey = (key: string) => {
	const [y, m, d] = key.split('-').map(Number);
	return new Date(y, m - 1, d);
};

export const toKey = (date: Date) =>
	[
		date.getFullYear(),
		String(date.getMonth() + 1).padStart(2, '0'),
		String(date.getDate()).padStart(2, '0'),
	].join('-');

export const startOfDay = (date: Date) =>
	new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const addDays = (date: Date, days: number) => {
	const next = new Date(date);
	next.setDate(next.getDate() + days);
	return next;
};

/** Whole calendar days from `from` to `to` (0 = same day). */
export const daysBetween = (from: Date, to: Date) =>
	Math.round((startOfDay(to).getTime() - startOfDay(from).getTime()) / DAY_MS);

export const isSameDay = (a: Date, b: Date) => daysBetween(a, b) === 0;

export const weekdayName = (date: Date, style: 'long' | 'short' = 'long') =>
	date.toLocaleDateString('en-GB', { weekday: style });

/** Name of a weekday number (0 = Sunday). 7 Jan 2024 was a Sunday. */
export const weekdayNameOf = (day: number) => weekdayName(new Date(2024, 0, 7 + day));

export const monthName = (date: Date, style: 'long' | 'short' = 'long') =>
	date.toLocaleDateString('en-GB', { month: style });

/** "Fri 16 Oct" */
export const shortDate = (date: Date) =>
	date.toLocaleDateString('en-GB', {
		weekday: 'short',
		day: 'numeric',
		month: 'short',
	});

/** "16 October" */
export const dayMonth = (date: Date) =>
	date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });

/** "in 5 days", "tomorrow", "today" */
export const relativeDays = (days: number) => {
	if (days === 0) return 'today';
	if (days === 1) return 'tomorrow';
	return `in ${days} days`;
};

/** "20:00" -> { hour: 20, minute: 0 } */
export const parseTime = (time: string) => {
	const [hour, minute] = time.split(':').map(Number);
	return { hour, minute };
};

/** "20:00" -> "8:00 pm" */
export const formatTime = (time: string) => {
	const { hour, minute } = parseTime(time);
	const suffix = hour < 12 ? 'am' : 'pm';
	const h = hour % 12 === 0 ? 12 : hour % 12;
	return `${h}:${String(minute).padStart(2, '0')} ${suffix}`;
};

export const timeOfDay = (date: Date) => {
	const hour = date.getHours();
	if (hour < 12) return 'morning';
	if (hour < 18) return 'afternoon';
	return 'evening';
};
