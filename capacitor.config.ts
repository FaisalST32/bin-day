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
			smallIcon: 'res://drawable/ic_icon_small',
			largeIcon: 'res://drawable/ic_icon_large',
			iconColor: '#488AFF',
			// sound: 'beep.wav',
		},
	},
};

export default config;
