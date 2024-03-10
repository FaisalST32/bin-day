import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'io.zyur.bindicator',
	appName: 'Bindicator',
	webDir: 'dist',
	server: {
		androidScheme: 'https',
	},
	plugins: {
		LocalNotifications: {
			smallIcon: 'res://drawable/ic_icon_small',
			largeIcon: 'res://drawable/ic_icon_large',
			iconColor: '#488AFF',
			// sound: 'beep.wav',
		},
	},
};

export default config;
