import React from 'react';
import Logo from './assets/Logo REC.jpg';
import './Header.css'; // hier zetten we de stijlen

function Header() {
  return (
    <header className="AppHeader">
      {/* Logo linksboven */}
      <div className="LogoContainer">
        <img src={Logo} alt="RealEstateCare Logo" className="Logo" />
      </div>

      {/* Navigatie links van logo */}
      <nav className="NavMenu">
        <a href="#" className="NavItem">Home</a>
        <a href="#" className="NavItem">Page 1</a>
        <a href="#" className="NavItem">Page 2</a>
        <a href="#" className="NavItem">Page 3</a>
        <a href="#" className="NavItem">Page 4</a>
      </nav>
    </header>
  );
}

export default Header;