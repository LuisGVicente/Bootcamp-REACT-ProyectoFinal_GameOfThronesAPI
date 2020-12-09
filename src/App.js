import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/HomePage/HomePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
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
                <GalleryPage item="houses"></GalleryPage>
            </Route>

            <Route path="/characters">
                <GalleryPage item="characters"></GalleryPage>
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
