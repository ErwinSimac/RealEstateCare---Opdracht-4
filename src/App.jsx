import './App.css'
import Logo from './assets/Logo REC.jpg'

function App() {
  return (
    <div className="App">
      <div className="TopBlock"></div>
      <div className="AppContent">
        <h1>Hello World</h1>
        <img src={Logo} alt="RealEstateCare Logo" style={{ width: '200px', marginBottom: '20px' }} />
        <p>Welkom bij de RealEstateCare applicatie</p>
      </div>
    </div>
  )
}

export default App
