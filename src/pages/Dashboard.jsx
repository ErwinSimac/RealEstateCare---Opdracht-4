// src/pages/Dashboard.jsx
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import Header from '../components/Header';
import FooterTabs from '../components/FooterTabs';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => (
  <IonPage>
    <Header />
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol size="6">
            <DashboardCard title="Toegewezen" icon="list" />
          </IonCol>
          <IonCol size="6">
            <DashboardCard title="Uitgevoerd" icon="checkmarkCircle" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="6">
            <DashboardCard title="Kennisbase" icon="book" />
          </IonCol>
          <IonCol size="6">
            <DashboardCard title="Instellingen" icon="settings" />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
    <FooterTabs />
  </IonPage>
);

export default Dashboard;