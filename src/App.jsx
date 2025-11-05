import './App.css';
import Logo from './assets/Logo REC.jpg';

function App() {
  return (
    <div className="App">
      {/* Bovenste kleurblok */}
      <div className="TopBlock"></div>

      {/* Content */}
      <div className="AppContent">
        <h1>Hello World</h1>
        <img src={Logo} alt="RealEstateCare Logo" style={{ width: '200px', marginBottom: '20px' }} />
        <p>Welkom bij de RealEstateCare applicatie</p>
      </div>

      {/* Onderste balk: horizontale gradient */}
      <div className="BottomBlock"></div>
    </div>
  );
}

export default App;
