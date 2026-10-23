import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'io.zyur.bindicator',
	appName: 'Bindicator',
	webDir: 'dist',
	server: {
		androidScheme: 'https',
	},
	plugins: {
		SplashScreen: {
			// The app hides it as soon as the first screen has rendered; this is only a fallback.
			launchShowDuration: 3000,
			launchAutoHide: true,
			launchFadeOutDuration: 300,
			showSpinner: false,
			androidScaleType: 'CENTER_CROP',
		},
		LocalNotifications: {
			smallIcon: 'res://drawable/ic_stat_bin',
			iconColor: '#F15025',
			// sound: 'beep.wav',
		},
	},
};

export default config;
