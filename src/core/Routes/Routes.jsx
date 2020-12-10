import React from 'react'
import {Switch, Route} from "react-router-dom";
// import CharactersPage from '../../pages/CharactersPage/CharactersPage';
import GalleryPage from '../../pages/GalleryPage/GalleryPage';
import Homepage from '../../pages/HomePage/HomePage';
// import HousesPage from '../../pages/HousesPage/HousesPage';
import DetailsPage from '../../shared/DetailsPage/DetailsPage';
// import Gallery from '../../shared/Gallery/Gallery';

export default function Routes(){
    return(
        <Switch>
            <Route path="/houses/:detailsName">
              <DetailsPage page="house"></DetailsPage>
            </Route>

            <Route path="/houses">
              <GalleryPage item='houses'></GalleryPage>
            </Route>

            <Route path="/characters/:detailsName">
              <DetailsPage page="character"></DetailsPage>
            </Route>

            <Route path="/characters">
              <GalleryPage item='characters'></GalleryPage>
            </Route>

            <Route path="/">
              <Homepage></Homepage>
            </Route>
        </Switch>
    )
}