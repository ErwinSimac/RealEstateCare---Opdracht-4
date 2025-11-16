import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TabBar from './components/TabBar';
import DashboardMenu from './components/DashboardMenu';

import OpenstaandeInspecties from './pages/Toegewezen rapportages';
import UitgevoerdeInspecties from './pages/Uitgevoerde rapportages openen';
import KnowledgeBase from './pages/Kennisbasedocumentatie';
import Instellingen from './pages/Instellingen';
import Login from './pages/login';

// Wrapper om route info te krijgen
function Layout({ children }) {
  const location = useLocation();
  const hideNav = location.pathname === '/login'; // login check

  return (
    <div className="App">
      {!hideNav && <Header />}
      <main className="MainContent">{children}</main>
      {!hideNav && <TabBar />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<DashboardMenu />} />
                <Route path="/Toegewezen-rapportages" element={<OpenstaandeInspecties />} />
                <Route path="/Uitgevoerde-rapportages-openen" element={<UitgevoerdeInspecties />} />
                <Route path="/Kennisbasedocumentatie" element={<KnowledgeBase />} />
                <Route path="/instellingen" element={<Instellingen />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;