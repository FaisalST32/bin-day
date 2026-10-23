import { App as CapApp } from '@capacitor/app';
import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { toKey } from '../lib/dates';
import { onPutOutAction } from '../services/notifications';
import { binNightFor } from '../services/reminders';
import { loadSettings, saveSettings, Settings } from '../services/settings';
import { syncDevice } from '../services/sync';
import { takePendingPutOut } from '../services/widgets';

type AppState = {
	settings: Settings;
	update: (change: (draft: Settings) => void) => void;
	markPutOut: (key: string) => void;
	now: Date;
};

const AppStateContext = createContext<AppState | undefined>(undefined);

const clone = (s: Settings): Settings => JSON.parse(JSON.stringify(s));

/** Development only: ?now=2026-10-15T19:45 shifts the app's clock for testing bin night etc. */
const clockOffset = (() => {
	if (!import.meta.env.DEV) return 0;
	const param = new URLSearchParams(window.location.search).get('now');
	return param ? Date.parse(param) - Date.now() : 0;
})();
const currentTime = () => new Date(Date.now() + clockOffset);

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
	const [settings, setSettings] = useState<Settings>(loadSettings);
	const [now, setNow] = useState(currentTime);

	const update = useCallback((change: (draft: Settings) => void) => {
		setSettings((prev) => {
			const next = clone(prev);
			change(next);
			saveSettings(next);
			return next;
		});
	}, []);

	const markPutOut = useCallback(
		(key: string) =>
			update((s) => {
				if (!s.putOut.includes(key)) s.putOut = [...s.putOut, key].slice(-12);
			}),
		[update]
	);

	useEffect(() => {
		const action = onPutOutAction(markPutOut);
		return () => {
			action.then((h) => h.remove());
		};
	}, [markPutOut]);

	useEffect(() => {
		const collectPutOut = () =>
			takePendingPutOut()
				.then((keys) => keys.forEach(markPutOut))
				.catch((e) => console.warn('Reading put-out marks failed', e));
		collectPutOut();
		const tick = setInterval(() => setNow(currentTime()), 30_000);
		const resume = CapApp.addListener('resume', () => {
			setNow(currentTime());
			collectPutOut();
		});
		return () => {
			clearInterval(tick);
			resume.then((h) => h.remove());
		};
	}, [markPutOut]);

	const today = toKey(now);
	const binNight = binNightFor(settings, now)?.collection.key;
	useEffect(() => {
		if (settings.code) syncDevice(settings, now);
	}, [settings, today, binNight]);

	const value = useMemo(
		() => ({ settings, update, markPutOut, now }),
		[settings, update, markPutOut, now]
	);

	return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => {
	const state = useContext(AppStateContext);
	if (!state) throw new Error('useAppState must be used inside AppStateProvider');
	return state;
};
