import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mi.app',
  appName: 'miapp',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
