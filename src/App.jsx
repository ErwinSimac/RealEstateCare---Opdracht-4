import './App.css'
import Logo from './assets/Logo REC.jpg'

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      
      {/* Bovenste kleurblok (10% hoogte) */}
      <div style={{ height: '10vh', backgroundColor: 'rgba(0,170,162,0.3)' }}></div>
      
      {/* Content onder het kleurblok */}
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        <h1 style={{ color: '#004080', marginBottom: '20px' }}>Hello World</h1>
        <img src={Logo} alt="RealEstateCare Logo" style={{ width: '200px', marginBottom: '20px' }} />
        <p>Welkom bij de RealEstateCare applicatie</p>
      </div>
      
    </div>
  )
}

export default App
