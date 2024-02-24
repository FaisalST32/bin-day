import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { Welcome } from "../components/Welcome/Welcome";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen style={{ innerHeight: "100vh" }}>
        <Welcome />
      </IonContent>
    </IonPage>
  );
};

export default Home;
