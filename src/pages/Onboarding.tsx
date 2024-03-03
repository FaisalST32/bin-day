import { IonContent, IonPage } from '@ionic/react';
import { Welcome } from '../components/Welcome/Welcome';
import { getCollectionCode } from '../services/settings.service';
import { HomePage } from './Home';
import './Onboarding.css';

const Onboarding: React.FC = () => {
	const collectionCode = getCollectionCode();
	if (collectionCode) {
		return <HomePage />;
	}

	return (
		<IonPage>
			<IonContent fullscreen style={{ innerHeight: '100vh' }}>
				<Welcome />
			</IonContent>
		</IonPage>
	);
};

export default Onboarding;
