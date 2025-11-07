// src/components/DashboardCard.jsx
import { IonCard, IonCardContent, IonIcon, IonLabel } from '@ionic/react';
import { list, checkmarkCircle, book, settings } from 'ionicons/icons';

const iconsMap = {
  list: list,
  checkmarkCircle: checkmarkCircle,
  book: book,
  settings: settings,
};

const DashboardCard = ({ title, icon }) => (
  <IonCard button>
    <IonCardContent style={{ textAlign: 'center' }}>
      <IonIcon icon={iconsMap[icon]} style={{ fontSize: '2em', marginBottom: '10px' }} />
      <IonLabel>{title}</IonLabel>
    </IonCardContent>
  </IonCard>
);

export default DashboardCard;