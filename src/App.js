import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './core/Routes/Routes';
import LoadingContext from './shared/contexts/LoadingContext';
import { useState } from 'react';

// import {useTranslation} from 'react-i18next';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  // const {t, i18n } = useTranslation();
  return (
        <Router>
          <LoadingContext.Provider value={{isLoading, setIsLoading}}>
          <Routes></Routes>
          </LoadingContext.Provider>
        </Router>
  );
}

export default App;
