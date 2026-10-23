import { AppUpdate, AppUpdateAvailability } from '@capawesome/capacitor-app-update';
import { Capacitor, CapacitorHttp } from '@capacitor/core';

const APP_STORE_ID = '6502180725';
const BUNDLE_ID = 'io.zyur.bindicator';

export type AvailableUpdate = {
	version: string;
	notes?: string[];
	sizeMb?: number;
	immediate: boolean;
};

/** App Store listing details: the plugin gives the version but not the notes or size. */
const appStoreDetails = async () => {
	try {
		const res = await CapacitorHttp.get({
			url: `https://itunes.apple.com/lookup?bundleId=${BUNDLE_ID}&country=gb`,
		});
		const data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
		const app = data?.results?.[0];
		return {
			notes: (app?.releaseNotes as string | undefined)
				?.split('\n')
				.map((l) => l.replace(/^[\s•*-]+/, '').trim())
				.filter(Boolean),
			sizeMb: app?.fileSizeBytes ? Math.round(Number(app.fileSizeBytes) / 100_000) / 10 : undefined,
		};
	} catch {
		return {};
	}
};

export const checkForUpdate = async (): Promise<AvailableUpdate | undefined> => {
	if (import.meta.env.DEV && new URLSearchParams(window.location.search).has('update')) {
		return {
			version: '0.1.0',
			sizeMb: 8.4,
			immediate: false,
			notes: ['A fresh new look', 'Reminders that name your bins', 'Home and lock screen widgets'],
		};
	}
	if (!Capacitor.isNativePlatform()) return;
	const info = await AppUpdate.getAppUpdateInfo({ country: 'GB' });
	if (info.updateAvailability !== AppUpdateAvailability.UPDATE_AVAILABLE) return;
	const isIos = Capacitor.getPlatform() === 'ios';
	const version = (isIos ? info.availableVersionName : info.availableVersionName ?? info.availableVersionCode) ?? '';
	return {
		version: String(version),
		immediate: !isIos && !!info.immediateUpdateAllowed,
		...(isIos ? await appStoreDetails() : {}),
	};
};

export const openStore = async () => {
	if (!Capacitor.isNativePlatform()) {
		window.open(`https://apps.apple.com/app/id${APP_STORE_ID}`, '_blank');
		return;
	}
	await AppUpdate.openAppStore({ appId: APP_STORE_ID });
};

export const installUpdate = async (update: AvailableUpdate) => {
	if (update.immediate) {
		await AppUpdate.performImmediateUpdate();
		return;
	}
	await openStore();
};
