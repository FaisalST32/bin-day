import { IonContent, IonPage } from '@ionic/react';
import { useMemo, useState } from 'react';
import { BinChips } from '../../components/BinChips';
import { BinIcon } from '../../components/BinIcon';
import { ChevronLeft, ChevronRight } from '../../components/Icons';
import { BIN_KINDS, BINS, BinKind, binsPhrase } from '../../lib/bins';
import { addDays, daysBetween, isSameDay, monthName, shortDate, toKey, weekdayName, weekdayNameOf } from '../../lib/dates';
import { useIsDark } from '../../lib/useTheme';
import { Collection, getCollections, getUpcoming, getUsualWeekday, isMoved } from '../../services/schedule';
import { useAppState } from '../../state/AppState';
import './Schedule.css';

type View = 'month' | 'list' | 'bin';

export const SchedulePage = () => {
	const { settings, now } = useAppState();
	const [view, setView] = useState<View>('month');
	const code = settings.code;
	const upcoming = getUpcoming(code, now);
	const usualDay = weekdayNameOf(getUsualWeekday(code));
	const changes = upcoming.filter((c) => isMoved(code, c) && daysBetween(now, c.date) <= 75);

	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='page schedule'>
					<div className='topbar'>
						<span className='page-title'>Schedule</span>
						<span className='chip'>
							{code} · {usualDay}s
						</span>
					</div>
					<div className='seg' role='tablist'>
						{(
							[
								['month', 'Month'],
								['list', 'List'],
								['bin', 'By bin'],
							] as [View, string][]
						).map(([id, label]) => (
							<button key={id} role='tab' aria-selected={view === id} className={view === id ? 'on' : ''} onClick={() => setView(id)}>
								{label}
							</button>
						))}
					</div>

					{changes.length > 0 && <Changes code={code} changes={changes} />}

					{view === 'month' && <MonthView code={code} now={now} />}
					{view === 'list' && <ListView code={code} upcoming={upcoming} now={now} />}
					{view === 'bin' && <ByBinView upcoming={upcoming} now={now} />}
				</div>
			</IonContent>
		</IonPage>
	);
};

const Changes = ({ code, changes }: { code: string; changes: Collection[] }) => {
	const christmas = changes.every((c) => c.date.getMonth() === 11 || c.date.getMonth() === 0);
	const parts = changes.map((c, i) => (
		<span key={c.key}>
			{i > 0 && (i === changes.length - 1 ? ' and ' : ', ')}
			{binsPhrase(c.bins)} on <b>{shortDate(c.date)}</b>
		</span>
	));
	return (
		<div className='changes'>
			<div className='ico'>{christmas ? '🎄' : '📅'}</div>
			<div>
				<b>{christmas ? 'Christmas changes' : 'Collection day changes'}</b>
				<p>
					{parts}, instead of the usual {weekdayNameOf(getUsualWeekday(code))}. Your reminders already
					allow for this.
				</p>
			</div>
		</div>
	);
};

const MonthView = ({ code, now }: { code: string; now: Date }) => {
	const all = getCollections(code);
	const dark = useIsDark();
	const [month, setMonth] = useState(() => new Date(now.getFullYear(), now.getMonth(), 1));
	const byKey = useMemo(() => new Map(all.map((c) => [c.key, c])), [all]);
	const first = all[0]?.date;
	const last = all[all.length - 1]?.date;
	const canPrev = !!first && month > new Date(first.getFullYear(), first.getMonth(), 1);
	const canNext = !!last && month < new Date(last.getFullYear(), last.getMonth(), 1);

	const lead = (month.getDay() + 6) % 7;
	const start = addDays(month, -lead);
	const cells = Array.from({ length: 42 }, (_, i) => addDays(start, i));
	const weeks = cells[35].getMonth() === month.getMonth() ? 6 : 5;
	const inMonth = all.filter((c) => c.date.getMonth() === month.getMonth() && c.date.getFullYear() === month.getFullYear());

	return (
		<>
			<div className='card cal'>
				<div className='mh'>
					<b>
						{monthName(month)} {month.getFullYear()}
					</b>
					<span className='nav'>
						<button aria-label='Previous month' disabled={!canPrev} onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}>
							<ChevronLeft />
						</button>
						<button aria-label='Next month' disabled={!canNext} onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}>
							<ChevronRight />
						</button>
					</span>
				</div>
				<div className='wd'>
					{['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
						<div key={i}>{d}</div>
					))}
				</div>
				<div className='days'>
					{cells.slice(0, weeks * 7).map((d) => {
						const c = byKey.get(toKey(d));
						const cls = [
							d.getMonth() !== month.getMonth() || daysBetween(now, d) < 0 ? 'fade' : '',
							isSameDay(d, now) ? 'today' : '',
							c ? 'col' : '',
							c && isMoved(code, c) ? 'moved' : '',
						].join(' ');
						return (
							<div key={d.getTime()} className={cls}>
								{d.getDate()}
								{c && (
									<span className='dots'>
										{c.bins.map((b) => (
											<i key={b} style={{ background: dark ? BINS[b].colorDark : BINS[b].color }} />
										))}
									</span>
								)}
							</div>
						);
					})}
				</div>
			</div>
			{inMonth.length > 0 && (
				<div className='card rows'>
					{inMonth.map((c) => (
						<Row key={c.key} c={c} now={now} moved={isMoved(code, c)} />
					))}
				</div>
			)}
		</>
	);
};

const Row = ({ c, now, moved }: { c: Collection; now: Date; moved: boolean }) => {
	const days = daysBetween(now, c.date);
	return (
		<div className={['list-row', days < 0 ? 'past' : ''].join(' ')}>
			<div className='d'>
				{weekdayName(c.date, 'short')} {c.date.getDate()}
				<span>{days < 0 ? 'Done' : days === 0 ? 'Today' : days === 1 ? 'Tomorrow' : `in ${days} days`}</span>
			</div>
			<BinChips bins={c.bins} />
			{moved && <span className='moved-tag'>Changed</span>}
		</div>
	);
};

const ListView = ({ code, upcoming, now }: { code: string; upcoming: Collection[]; now: Date }) => {
	const groups = new Map<string, Collection[]>();
	for (const c of upcoming.slice(0, 26)) {
		const label = `${monthName(c.date)} ${c.date.getFullYear()}`;
		groups.set(label, [...(groups.get(label) ?? []), c]);
	}
	return (
		<>
			{[...groups].map(([label, items]) => (
				<div key={label}>
					<div className='group-label'>{label}</div>
					<div className='card rows'>
						{items.map((c) => (
							<Row key={c.key} c={c} now={now} moved={isMoved(code, c)} />
						))}
					</div>
				</div>
			))}
		</>
	);
};

const ByBinView = ({ upcoming, now }: { upcoming: Collection[]; now: Date }) => {
	const dark = useIsDark();
	const perBin = (bin: BinKind) => upcoming.filter((c) => c.bins.includes(bin)).slice(0, 4);
	return (
		<div className='by-bin'>
			{BIN_KINDS.filter((b) => perBin(b).length > 0).map((bin) => {
				const [next, ...rest] = perBin(bin);
				const days = daysBetween(now, next.date);
				return (
					<div className='card bin-card' key={bin}>
						<BinIcon kind={bin} size={44} dark={dark} />
						<div className='info'>
							<div className='name'>{BINS[bin].label} bin</div>
							<div className='what'>{BINS[bin].contents}</div>
							<div className='next'>
								<b>{shortDate(next.date)}</b> · {days === 0 ? 'today' : days === 1 ? 'tomorrow' : `in ${days} days`}
							</div>
							<div className='then'>Then {rest.map((c) => shortDate(c.date).replace(/^\w+ /, '')).join(', ')}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
