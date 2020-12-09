import './App.scss';
<<<<<<< HEAD

import { BrowserRouter as Router} from 'react-router-dom'
import DetailsPage from './shared/DetailsPage/DetailsPage';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/HomePage/HomePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
// import {useTranslation} from 'react-i18next';
>>>>>>> 6d13a9f89cea8e3fb661730201fcf82ac443e5a9

function App() {
  // const {t, i18n } = useTranslation();
  return (
    <Router>
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <DetailsPage></DetailsPage>
      </header>
=======
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
>>>>>>> 6d13a9f89cea8e3fb661730201fcf82ac443e5a9
    </div>
    </Router>
  );
}

export default App;
