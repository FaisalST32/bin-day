import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Bin Day',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
