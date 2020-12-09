import './App.scss';


// import { BrowserRouter as Router} from 'react-router-dom'
import DetailsPage from './shared/DetailsPage/DetailsPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/HomePage/HomePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
// import {useTranslation} from 'react-i18next';

function App() {
  // const {t, i18n } = useTranslation();
  return (
    <Router>
    <div className="App">
      <div className="App-header">

      

      <Switch>
            <Route path="/houses/:detailsName">
             <DetailsPage page="house"></DetailsPage>
            </Route>

            <Route path="/houses">
                <GalleryPage item="houses"></GalleryPage>
            </Route>

            <Route path="/characters/:detailsName">
             <DetailsPage page="character"></DetailsPage>
            </Route>

            <Route path="/characters">
                <GalleryPage item="characters"></GalleryPage>
            </Route>

            <Route path="/">
                <Homepage></Homepage>
            </Route>
 

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
