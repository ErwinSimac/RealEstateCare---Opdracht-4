import './App.css';
import Logo from './assets/Logo REC.jpg';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

function App() {
  return (
    <IonApp>
      {/* Header */}
      <IonHeader>
        <IonToolbar
          style={{
            background: 'linear-gradient(to right, rgba(0,170,162,1), rgba(41,52,57,1))',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={Logo}
            alt="RealEstateCare Logo"
            style={{ height: '40px', marginRight: '10px', borderRadius: '6px' }}
          />
          <IonTitle>RealEstateCare Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Hoofdinhoud */}
      <IonContent fullscreen>
        <div
          className="AppContent"
          style={{
            textAlign: 'center',
            padding: '50px',
            backgroundColor: '#F5F5F5',
            minHeight: '80vh',
          }}
        >
          <h1 style={{ color: 'rgba(41,52,57,1)' }}>Hello World</h1>
          <p style={{ color: 'rgba(41,52,57,1)' }}>
            Welkom bij de RealEstateCare applicatie
          </p>
          <img
            src={Logo}
            alt="RealEstateCare Logo"
            style={{ width: '200px', marginTop: '20px', borderRadius: '10px' }}
          />
        </div>

        {/* Onderste balk (optioneel placeholder voor tab bar) */}
        <div
          className="BottomBlock"
          style={{
            height: '60px',
            background: 'linear-gradient(to right, rgba(71,94,108,1), rgba(20,27,31,1))',
          }}
        ></div>
      </IonContent>
    </IonApp>
  );
}

export default App;