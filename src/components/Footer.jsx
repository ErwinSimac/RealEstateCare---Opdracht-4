// src/components/FooterTabs.jsx
import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs } from '@ionic/react';
import { list, checkmarkCircle, book, settings } from 'ionicons/icons';

const FooterTabs = () => (
  <IonTabs>
    <IonTabBar slot="bottom">
      <IonTabButton tab="assigned" href="/assigned">
        <IonIcon icon={list} />
        <IonLabel>Toegewezen</IonLabel>
      </IonTabButton>

      <IonTabButton tab="completed" href="/completed">
        <IonIcon icon={checkmarkCircle} />
        <IonLabel>Uitgevoerd</IonLabel>
      </IonTabButton>

      <IonTabButton tab="knowledge" href="/knowledge">
        <IonIcon icon={book} />
        <IonLabel>Kennisbase</IonLabel>
      </IonTabButton>

      <IonTabButton tab="settings" href="/settings">
        <IonIcon icon={settings} />
        <IonLabel>Instellingen</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default FooterTabs;