import './App.css'
import Logo from './assets/Logo REC.jpg'

function App() {
  return (
    <div style={{ textAlign: 'center', minHeight: '100vh', position: 'relative' }}>
      
      {/* Bovenste kleurblok */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '10vh',              // 10% van de viewport hoogte
        backgroundColor: 'rgba(0,170,162,0.3)'  // alfa 0.3 = 30% zichtbaar
      }}></div>

      {/* Content */}
      <div style={{ paddingTop: '50px', position: 'relative', zIndex: 1 }}>
        <h1 style={{ color: '#004080', marginBottom: '20px' }}>Hello World</h1>
        <img src={Logo} alt="RealEstateCare Logo" style={{ width: '200px', marginBottom: '20px' }} />
        <p>Welkom bij de RealEstateCare applicatie</p>
      </div>

    </div>
  )
}

export default App
