import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'


import store from './store'

import MangaScreen from './screens/MangaScreen'
import AnimeScreen from './screens/AnimeScreen'
import MoviesScreen from './screens/MoviesScreen'
import AllDataScreen from './screens/AllDataScreen'
import HomeScreen from './screens/HomeScreen'


function App() {

    return (
        <Provider store = {store}>
            <BrowserRouter>

                <Route 
                    exact
                    path = '/'
                    render = { (routeProps) => <HomeScreen {...routeProps} /> }
                />

                <Route 
                    exact 
                    path = '/anime'
                    render = {(routeProps) => <AnimeScreen {...routeProps} /> }
                />

                <Route 
                    exact 
                    path = '/manga'
                    render = {(routeProps) => <MangaScreen {...routeProps} /> }
                />

                <Route 
                    exact 
                    path = '/movies'
                    render = {(routeProps) => <MoviesScreen {...routeProps} /> }
                />

                <Route 
                    exact
                    path = '/alldata'
                    render = { () => <AllDataScreen /> }
                />
                
            </BrowserRouter>
        </Provider>
    );
}

export default App;
