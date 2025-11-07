// src/components/Header.jsx
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import Logo from '../assets/Logo REC.jpg';

const Header = () => (
  <IonHeader>
    <IonToolbar color="primary">
      <img src={Logo} alt="RealEstateCare Logo" style={{ height: '40px', marginRight: '10px' }} />
      <IonTitle>RealEstateCare Dashboard</IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default Header;
