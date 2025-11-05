import { useState } from 'react'
import reactLogo from './assets/Logo REC.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#F5F5F5' }}>
      <img src={reactLogo} alt="RealEstateCare Logo" style={{ width: '200px', marginBottom: '20px' }} />
      <h1 style={{ color: '#004080' }}>Hello World</h1>
      <p>Welkom bij de RealEstateCare applicatie</p>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App