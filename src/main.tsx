import { SplashScreen } from '@capacitor/splash-screen';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/** Long enough to register the logo, short enough not to feel like waiting. */
const MIN_SPLASH_MS = 700;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

requestAnimationFrame(() => {
  const wait = Math.max(0, MIN_SPLASH_MS - performance.now());
  setTimeout(() => SplashScreen.hide({ fadeOutDuration: 300 }).catch(() => undefined), wait);
});
