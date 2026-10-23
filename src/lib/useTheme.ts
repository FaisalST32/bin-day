import { createContext, useContext, useEffect, useState } from 'react';

const query = () => window.matchMedia('(prefers-color-scheme: dark)');

/** Set by screens that are always dark, such as bin night. */
export const ForcedDark = createContext(false);

/** Follows the phone's light/dark setting and mirrors it as a class on <html>. */
export const useSystemTheme = () => {
	useEffect(() => {
		const mq = query();
		const apply = () => document.documentElement.classList.toggle('dark', mq.matches);
		apply();
		mq.addEventListener('change', apply);
		return () => mq.removeEventListener('change', apply);
	}, []);
};

export const useIsDark = () => {
	const forced = useContext(ForcedDark);
	const [dark, setDark] = useState(() => query().matches);
	useEffect(() => {
		const mq = query();
		const onChange = () => setDark(mq.matches);
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, []);
	return forced || dark;
};
