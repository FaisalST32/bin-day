import { IonContent, IonPage, IonToggle, useIonRouter } from '@ionic/react';
import { useMemo, useRef, useState } from 'react';
import { BinIcon } from '../../components/BinIcon';
import { CheckIcon, ChevronLeft } from '../../components/Icons';
import { Logo } from '../../components/Logo';
import { TimeField } from '../../components/TimeField';
import { binsPhrase } from '../../lib/bins';
import { monthName, shortDate, weekdayNameOf } from '../../lib/dates';
import { useIsDark } from '../../lib/useTheme';
import { requestNotificationPermission } from '../../services/notifications';
import { getCodes, getLastDate, getNext, getUsualWeekday, hasCode, TEST_CODE } from '../../services/schedule';
import { useAppState } from '../../state/AppState';
import './Onboarding.css';

type Step = 'welcome' | 'name' | 'code' | 'reminders';
const STEPS: Step[] = ['name', 'code', 'reminders'];
const MAX_CODE = 6;

export const OnboardingPage = () => {
	const { settings, update } = useAppState();
	const router = useIonRouter();
	const staleCode = !!settings.code && !hasCode(settings.code);
	const [step, setStep] = useState<Step>(staleCode ? 'code' : 'welcome');
	const [name, setName] = useState(settings.name);
	const [code, setCode] = useState('');
	const [reminders, setReminders] = useState(settings.reminders);

	const finish = async () => {
		if (reminders.nightBefore.enabled || reminders.morningOf.enabled) {
			await requestNotificationPermission();
		}
		update((s) => {
			s.name = name.trim();
			s.code = code;
			s.reminders = reminders;
		});
		router.push('/tabs/today', 'root', 'replace');
	};

	const back = () => setStep(step === 'name' ? 'welcome' : STEPS[STEPS.indexOf(step) - 1]);

	return (
		<IonPage>
			<IonContent fullscreen>
				<div className='onboarding'>
					{step === 'welcome' ? (
						<Welcome onStart={() => setStep('name')} />
					) : (
						<>
							<div className='ob-top'>
								{!(staleCode && step === 'code') && (
									<button className='icon-btn' aria-label='Back' onClick={back}>
										<ChevronLeft />
									</button>
								)}
								<div className='steps'>
									{STEPS.map((s, i) => (
										<i key={s} className={i <= STEPS.indexOf(step) ? 'on' : ''} />
									))}
								</div>
							</div>
							{step === 'name' && <NameStep name={name} setName={setName} onNext={() => setStep('code')} />}
							{step === 'code' && (
								<CodeStep code={code} setCode={setCode} stale={staleCode ? settings.code : undefined} onNext={() => setStep('reminders')} />
							)}
							{step === 'reminders' && <RemindersStep reminders={reminders} setReminders={setReminders} onFinish={finish} />}
						</>
					)}
				</div>
			</IonContent>
		</IonPage>
	);
};

const Welcome = ({ onStart }: { onStart: () => void }) => {
	const dark = useIsDark();
	return (
	<div className='welcome'>
		<div className='welcome-art'>
			<BinIcon kind='black' size={86} dark={dark} />
			<BinIcon kind='blue' size={110} dark={dark} />
			<BinIcon kind='brown' size={86} dark={dark} />
			<BinIcon kind='green' size={70} dark={dark} />
		</div>
		<Logo height={40} />
		<h1>Never miss bin day again</h1>
		<p className='lead'>Your Wigan collection dates, a reminder the night before, and nothing else to think about.</p>
		<div className='bottom'>
			<button className='btn primary' onClick={onStart}>
				Get started
			</button>
		</div>
	</div>
	);
};

const NameStep = ({ name, setName, onNext }: { name: string; setName: (v: string) => void; onNext: () => void }) => (
	<>
		<h2>What should we call you?</h2>
		<p className='lead'>Just for the greeting on the home screen. You can skip this.</p>
		<input
			className='text-input'
			value={name}
			placeholder='Your first name'
			autoComplete='given-name'
			enterKeyHint='next'
			onChange={(e) => setName(e.target.value)}
			onKeyDown={(e) => e.key === 'Enter' && onNext()}
		/>
		<div className='bottom'>
			<button className='btn primary' onClick={onNext}>
				{name.trim() ? 'Continue' : 'Skip'}
			</button>
		</div>
	</>
);

export const CodeStep = ({
	code,
	setCode,
	stale,
	onNext,
	nextLabel = 'Continue',
}: {
	code: string;
	setCode: (v: string) => void;
	stale?: string;
	onNext: () => void;
	nextLabel?: string;
}) => {
	const input = useRef<HTMLInputElement>(null);
	const [showAll, setShowAll] = useState(false);
	const codes = useMemo(getCodes, []);
	const found = hasCode(code);
	const next = found ? getNext(code) : undefined;
	const last = found ? getLastDate(code) : undefined;
	const unknown = !found && code.length >= 5 && !codes.some((c) => c.startsWith(code));

	return (
		<>
			<h2>What's your collection code?</h2>
			<p className='lead'>
				{stale
					? `The new council calendars don't include ${stale}. Check your latest letter for your new code.`
					: "It's printed on the bin calendar Wigan Council posts to you. Six letters at most."}
			</p>
			<label className='codebox' onClick={() => input.current?.focus()}>
				{Array.from({ length: MAX_CODE }, (_, i) => (
					<span key={i} className={[code[i] ? 'filled' : '', i === code.length ? 'cursor' : ''].join(' ')}>
						{code[i] ?? ''}
					</span>
				))}
				<input
					ref={input}
					value={code}
					aria-label='Collection code'
					autoCapitalize='characters'
					autoCorrect='off'
					autoComplete='off'
					spellCheck={false}
					maxLength={MAX_CODE}
					onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, MAX_CODE))}
				/>
			</label>

			{found && next && (
				<div className='card found'>
					<div className='tick'>
						<CheckIcon />
					</div>
					<div>
						<b>Found it: {code === TEST_CODE ? 'every day' : `${weekdayNameOf(getUsualWeekday(code))}s`}</b>
						<p>
							Next collection: <b>{binsPhrase(next.bins)}, {shortDate(next.date)}</b>.
							{last && ` Dates run to ${monthName(last)} ${last.getFullYear()}.`}
						</p>
					</div>
				</div>
			)}
			{unknown && (
				<div className='note' style={{ marginTop: 16 }}>
					We don't recognise <b>{code}</b>. Check the code on your letter, or pick it from the list below.
				</div>
			)}

			{!found && (
				<div className='card letter'>
					<div className='paper'>
						<i style={{ width: '70%' }} />
						<i />
						<i style={{ width: '80%' }} />
						<span className='hl'>FRIDDG</span>
						<i style={{ marginTop: 22 }} />
						<i style={{ width: '50%' }} />
					</div>
					<div>
						<b>Where to find it</b>
						<p>On the first page of your council bin calendar, under "Your collection day is…".</p>
					</div>
				</div>
			)}

			<button className='link-btn all-codes-toggle' onClick={() => setShowAll(!showAll)}>
				{showAll ? 'Hide the list' : 'Pick from the list instead'}
			</button>
			{showAll && (
				<div className='code-list'>
					{codes.map((c) => (
						<button
							key={c}
							className={['chip', c === code ? 'on' : ''].join(' ')}
							onClick={() => {
								setCode(c);
								setShowAll(false);
							}}
						>
							{c}
						</button>
					))}
				</div>
			)}

			<div className='bottom'>
				<button className='btn primary' disabled={!found} onClick={onNext}>
					{nextLabel}
				</button>
			</div>
		</>
	);
};

type RemindersValue = ReturnType<typeof useAppState>['settings']['reminders'];

const RemindersStep = ({
	reminders,
	setReminders,
	onFinish,
}: {
	reminders: RemindersValue;
	setReminders: (r: RemindersValue) => void;
	onFinish: () => void;
}) => {
	const set = (slot: 'nightBefore' | 'morningOf', change: Partial<RemindersValue['nightBefore']>) =>
		setReminders({ ...reminders, [slot]: { ...reminders[slot], ...change } });
	return (
		<>
			<h2>When should we remind you?</h2>
			<p className='lead'>We'll tell you which bins to put out. You can change this any time in Settings.</p>
			<div className='group'>
				<div className='row'>
					<div>
						<div className='t'>Night before</div>
						<div className='s'>The evening before</div>
					</div>
					<div className='end'>
						<TimeField value={reminders.nightBefore.time} onChange={(time) => set('nightBefore', { time, enabled: true })} />
						<IonToggle aria-label="Enabled" checked={reminders.nightBefore.enabled} onIonChange={(e) => set('nightBefore', { enabled: e.detail.checked })} />
					</div>
				</div>
				<div className='row'>
					<div>
						<div className='t'>Morning of</div>
						<div className='s'>A nudge on collection day</div>
					</div>
					<div className='end'>
						<TimeField value={reminders.morningOf.time} onChange={(time) => set('morningOf', { time, enabled: true })} />
						<IonToggle aria-label="Enabled" checked={reminders.morningOf.enabled} onIonChange={(e) => set('morningOf', { enabled: e.detail.checked })} />
					</div>
				</div>
			</div>
			<div className='bottom'>
				<button className='btn primary' onClick={onFinish}>
					{reminders.nightBefore.enabled || reminders.morningOf.enabled ? 'Turn on reminders' : 'Finish'}
				</button>
			</div>
		</>
	);
};
