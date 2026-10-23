import { Capacitor, registerPlugin } from '@capacitor/core';
import { binsPhrase } from '../lib/bins';
import { binNightFor } from './reminders';
import { BIN_NIGHT_END, getUpcoming } from './schedule';
import { Settings } from './settings';

type WidgetBridgePlugin = {
	setData(options: { json: string }): Promise<void>;
	/** Collections marked as out from outside the app (Live Activity or widget), since the last call. */
	takePendingPutOut(): Promise<{ keys: string[] }>;
	startBinNight(options: { key: string; title: string; bins: string[]; until: string }): Promise<{ started: boolean }>;
	endBinNight(): Promise<void>;
};

const WidgetBridge = registerPlugin<WidgetBridgePlugin>('WidgetBridge');

const available = () => Capacitor.isNativePlatform() && Capacitor.isPluginAvailable('WidgetBridge');

/** Upcoming collections for the home and lock screen widgets, which can't read app storage directly. */
export type WidgetData = {
	code: string;
	updatedAt: string;
	collections: { date: string; bins: string[]; title: string; putOut: boolean }[];
};

export const buildWidgetData = (settings: Settings): WidgetData => ({
	code: settings.code,
	updatedAt: new Date().toISOString(),
	collections: getUpcoming(settings.code)
		.slice(0, 16)
		.map((c) => ({
			date: c.key,
			bins: c.bins,
			title: binsPhrase(c.bins),
			putOut: settings.putOut.includes(c.key),
		})),
});

export const pushWidgetData = async (settings: Settings) => {
	if (!available()) return;
	await WidgetBridge.setData({ json: JSON.stringify(buildWidgetData(settings)) });
};

export const takePendingPutOut = async (): Promise<string[]> => {
	if (!available()) return [];
	return (await WidgetBridge.takePendingPutOut()).keys;
};

/** Shows the bin-night Live Activity while the bins still need putting out, and removes it otherwise. */
export const syncBinNight = async (settings: Settings, now = new Date()) => {
	if (!available() || Capacitor.getPlatform() !== 'ios') return;
	const night = binNightFor(settings, now);
	if (!night || settings.putOut.includes(night.collection.key)) {
		await WidgetBridge.endBinNight();
		return;
	}
	const { collection } = night;
	const until = new Date(collection.date);
	until.setHours(BIN_NIGHT_END, 0, 0, 0);
	await WidgetBridge.startBinNight({
		key: collection.key,
		title: binsPhrase(collection.bins),
		bins: collection.bins,
		until: until.toISOString(),
	});
};
