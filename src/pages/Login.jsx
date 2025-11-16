import React, { useState } from 'react';
import Logo from '../assets/react.svg';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('loggedIn', 'true');
      navigate('/');
    } else {
      setError('Gebruikersnaam of wachtwoord incorrect');
    }
  };

  return (
    <div className="LoginPage">
      {/* Header-balk met logo */}
      <header className="LoginHeader">
        <img src={Logo} alt="RealEstateCare Logo" className="LoginLogo" />
        <span className="LoginHeaderText">RealEstateCare</span>
      </header>

      {/* Login form */}
      <div className="LoginContainer">
        <h1 className="LoginTitle">Inloggen</h1>
        <form className="LoginForm" onSubmit={handleLogin}>
          <div className="FormGroup">
            <label htmlFor="username">Gebruikersnaam</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
          </div>
          <div className="FormGroup">
            <label htmlFor="password">Wachtwoord</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="LoginError">{error}</div>}
          <button type="submit" className="LoginButton">
            Inloggen
          </button>
        </form>
      </div>

      {/* Onderste TabBar-balk (zonder icoontjes) */}
      <footer className="LoginTabBar" />
    </div>
  );
}

export default Login;
