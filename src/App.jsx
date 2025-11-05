import './App.css';
import Logo from './assets/Logo REC.jpg';

function App() {
  return (
    <div className="App">
      <div className="TopBlock"></div>

      <div className="AppContent">
        <h1 style={{ color: '#004080', marginBottom: '20px' }}>Hello World</h1>
        <img src={Logo} alt="RealEstateCare Logo" style={{ width: '200px', marginBottom: '20px' }} />
        <p>Welkom bij de RealEstateCare applicatie</p>
      </div>

      <div className="BottomBlock"></div>
    </div>
  );
}

export default App;
