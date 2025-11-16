import React from 'react';
import Icon from '@mdi/react';
import {
  mdiAccountFileText,
  mdiFileDocumentOutline,
  mdiFileChartOutline,
  mdiCogOutline
} from '@mdi/js';
import './DashboardMenu.css';

// probeer useNavigate import dynamisch (valt terug als niet aanwezig)
let useNavigate;
try {
  // eslint-disable-next-line import/no-extraneous-dependencies
  // eslint-disable-next-line global-require
  useNavigate = require('react-router-dom').useNavigate;
} catch (e) {
  useNavigate = null;
}

function DashboardMenu() {
  const navigate = useNavigate ? useNavigate() : null;

  function goTo(path) {
    if (navigate) {
      navigate(path);
    } else {
      // fallback: normale pagina-navigatie (herlaadt page)
      window.location.href = path;
    }
  }

  return (
    <div className="DashboardMenu">
      <button
        className="DashboardItem"
        onClick={() => goTo('/Toegewezen-rapportages')}
        type="button"
        aria-label="Toegewezen rapportages"
      >
        <Icon path={mdiAccountFileText} size={3} />
        <span>Toegewezen rapportages</span>
      </button>

      <button
        className="DashboardItem"
        onClick={() => goTo('/Uitgevoerde-rapportages-openen')}
        type="button"
        aria-label="Uitgevoerde rapportages openen"
      >
        <Icon path={mdiFileDocumentOutline} size={3} />
        <span>Uitgevoerde rapportages openen</span>
      </button>

      <button
        className="DashboardItem"
        onClick={() => goTo('/Kennisbasedocumentatie')}
        type="button"
        aria-label="Kennisbase/documentatie"
      >
        <Icon path={mdiFileChartOutline} size={3} />
        <span>Kennisbase/documentatie</span>
      </button>

      <button
        className="DashboardItem"
        onClick={() => goTo('/Instellingen')}
        type="button"
        aria-label="Instellingen"
      >
        <Icon path={mdiCogOutline} size={3} />
        <span>Instellingen</span>
      </button>
    </div>
  );
}

export default DashboardMenu;
