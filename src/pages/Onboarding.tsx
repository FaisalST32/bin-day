import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import './Onboarding.css';
import { Welcome } from '../components/Welcome/Welcome';

const Onboarding: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen style={{ innerHeight: '100vh' }}>
				<Welcome />
			</IonContent>
		</IonPage>
	);
};

export default Onboarding;
