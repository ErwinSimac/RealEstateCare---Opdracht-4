import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      {/* Header bovenaan */}
      <Header />

      {/* Centraal contentblok */}
      <main className="MainContent" style={{ textAlign: 'center', padding: '50px', backgroundColor: '#F5F5F5', minHeight: '70vh' }}>
        <h1 style={{ color: 'rgba(41,52,57,1)' }}>Hello World</h1>
        <p style={{ color: 'rgba(41,52,57,1)' }}>Welkom bij de RealEstateCare applicatie</p>
      </main>

      {/* Onderste balk (kan later tab bar worden) */}
      <footer className="BottomBlock" style={{
        height: '60px',
        background: 'linear-gradient(to right, rgba(71,94,108,1), rgba(20,27,31,1))'
      }}>
      </footer>
    </div>
  );
}

export default App;
