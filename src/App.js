import './App.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './core/Routes/Routes';

// import {useTranslation} from 'react-i18next';

function App() {
  // const {t, i18n } = useTranslation();
  return (
        <Router>
          <Routes></Routes>
        </Router>
  );
}

export default App;
