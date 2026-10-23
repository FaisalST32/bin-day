import {
	IonApp,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import './theme/app.css';
import './theme/tabs.css';

import { CalendarIcon, HomeIcon, SettingsIcon } from './components/Icons';
import { UpdateSheet } from './components/UpdateSheet/UpdateSheet';
import { useSystemTheme } from './lib/useTheme';
import { OnboardingPage } from './pages/Onboarding/Onboarding';
import { RemindersPage } from './pages/Reminders/Reminders';
import { SchedulePage } from './pages/Schedule/Schedule';
import { SettingsPage } from './pages/Settings/Settings';
import { TodayPage } from './pages/Today/Today';
import { hasCode } from './services/schedule';
import { AppStateProvider, useAppState } from './state/AppState';

setupIonicReact({ swipeBackEnabled: true });

const Tabs = () => {
	const { settings } = useAppState();
	if (!hasCode(settings.code)) return <Redirect to='/onboarding' />;
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route exact path='/tabs/today' component={TodayPage} />
				<Route exact path='/tabs/schedule' component={SchedulePage} />
				<Route exact path='/tabs/settings' component={SettingsPage} />
				<Route exact path='/tabs/settings/reminders' component={RemindersPage} />
				<Route exact path='/tabs'>
					<Redirect to='/tabs/today' />
				</Route>
			</IonRouterOutlet>
			<IonTabBar slot='bottom' className='floating-tabs'>
				<IonTabButton tab='today' href='/tabs/today'>
					<HomeIcon />
					<IonLabel>Today</IonLabel>
				</IonTabButton>
				<IonTabButton tab='schedule' href='/tabs/schedule'>
					<CalendarIcon />
					<IonLabel>Schedule</IonLabel>
				</IonTabButton>
				<IonTabButton tab='settings' href='/tabs/settings'>
					<SettingsIcon />
					<IonLabel>Settings</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};

const Routes = () => {
	const { settings } = useAppState();
	return (
		<IonReactRouter>
			<IonRouterOutlet>
				<Route exact path='/onboarding' component={OnboardingPage} />
				<Route path='/tabs' render={() => <Tabs />} />
				<Route exact path='/'>
					<Redirect to={hasCode(settings.code) ? '/tabs/today' : '/onboarding'} />
				</Route>
			</IonRouterOutlet>
			{hasCode(settings.code) && <UpdateSheet />}
		</IonReactRouter>
	);
};

const App = () => {
	useSystemTheme();
	return (
		<IonApp>
			<AppStateProvider>
				<Routes />
			</AppStateProvider>
		</IonApp>
	);
};

export default App;
