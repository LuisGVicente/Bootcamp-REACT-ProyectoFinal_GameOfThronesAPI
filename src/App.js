import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/HomePage/HomePage';
import HousesPage from './pages/HousesPage/HousesPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
// import {useTranslation} from 'react-i18next';

function App() {
  // const {t, i18n } = useTranslation();
  return (
    <div className="App">
      <div className="App-header">
      {/* <p>{t('title')}</p> */}

      <Router>

      <Switch>

            <Route path="/houses">
                <HousesPage></HousesPage>
            </Route>

            <Route path="/characters">
                <CharactersPage></CharactersPage>
            </Route>

            <Route path="/">
                <Homepage></Homepage>
            </Route>
 

        </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
