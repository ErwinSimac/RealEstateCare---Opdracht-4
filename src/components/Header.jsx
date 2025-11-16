import React, { useState, useRef, useEffect } from 'react';
import Logo from '../assets/react.svg';
import './Header.css';
import Icon from '@mdi/react';
import { 
  mdiHome, 
  mdiMagnify, 
  mdiArrowLeftThick, 
  mdiAlphaXCircle, 
  mdiMagnifyPlus 
} from '@mdi/js';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef(null);
  const searchRef = useRef(null);

  const isLoginPage = location.pathname === '/login';

  // Open zoekbalk en focus input
  const handleSearchClick = () => {
    setSearchOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  // Submit zoekopdracht
  const handleSearchSubmit = () => {
    if (searchText.trim() !== '') {
      alert(`Zoekactie: ${searchText}`);
      setSearchText('');
      setSearchOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  // Sluit zoekbalk als gebruiker buiten klikt
  useEffect(() => {
    const handleClickOutside = (event) => {
      const header = document.querySelector('.AppHeader');
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        header &&
        !header.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

  return (
    <header className="AppHeader">
      {/* Links: Logo + RealEstateCare */}
      <div className="HeaderLeft">
        <img src={Logo} alt="RealEstateCare Logo" className="Logo" />
      </div>

      {/* Midden: nav-items alleen tonen als niet op login */}
      <nav className="HeaderCenter">
        {!isLoginPage && (
          <>
            <button className="NavItem" onClick={() => navigate('/')} type="button">
              <Icon path={mdiHome} size={1.5} color="rgba(41,52,57,1)" />
              <span>Home</span>
            </button>

            <button className="NavItem" type="button" onClick={handleSearchClick}>
              <Icon path={mdiMagnify} size={1.5} color="rgba(41,52,57,1)" />
              <span>Zoeken</span>
            </button>

            <div className="NavItem" onClick={() => window.history.back()}>
              <Icon path={mdiArrowLeftThick} size={1.5} color="rgba(41,52,57,1)" />
              <span>Terug</span>
            </div>

            <div
              className="NavItem"
              onClick={() => {
                if (window.confirm('Weet u zeker dat u wilt afmelden?')) {
                  localStorage.removeItem('loggedIn');
                  navigate('/login');
                }
              }}
            >
              <Icon path={mdiAlphaXCircle} size={1.5} color="rgba(41,52,57,1)" />
              <span>Afmelden</span>
            </div>
          </>
        )}
      </nav>

      <div className="HeaderRight"></div>

      {/* Zoekveld */}
      {!isLoginPage && searchOpen && (
        <div className="SearchContainer" ref={searchRef}>
          <input
            ref={inputRef}
            className="SearchInput"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Typ hier om te zoeken..."
          />
          <button className="SearchButton" type="button" onClick={handleSearchSubmit}>
            <Icon path={mdiMagnifyPlus} size={1.2} color="rgba(41,52,57,1)" />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
