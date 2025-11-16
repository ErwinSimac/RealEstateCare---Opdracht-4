import './TabBar.css';
import Icon from '@mdi/react';
import { 
  mdiAccountFileText, 
  mdiFileDocumentOutline, 
  mdiFileChartOutline, 
  mdiCogOutline 
} from '@mdi/js';
import { useNavigate } from 'react-router-dom';

function TabBar() {
  const navigate = useNavigate();

  return (
    <footer className="BottomBlock">
      <button className="TabItem" type="button" onClick={() => navigate('/Toegewezen-rapportages')}>
        <Icon path={mdiAccountFileText} size={1.5} color="white" />
        <span>Toegewezen rapportages</span>
      </button>

      <button className="TabItem" type="button" onClick={() => navigate('/Uitgevoerde-rapportages-openen')}>
        <Icon path={mdiFileChartOutline} size={1.5} color="white" />
        <span>Uitgevoerde rapportages openen</span>
      </button>

      <button className="TabItem TabItemRaised" type="button" onClick={() => navigate('/Kennisbasedocumentatie')}>
        <Icon path={mdiFileDocumentOutline} size={1.5} color="white" />
        <span>Kennisbase/documentatie</span>
      </button>

      <button className="TabItem TabItemRaised" type="button" onClick={() => navigate('/instellingen')}>
        <Icon path={mdiCogOutline} size={1.5} color="white" />
        <span>Instellingen</span>
      </button>
    </footer>
  );
}

export default TabBar;
