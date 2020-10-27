import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'


import store from './store'

import MangaScreen from './screens/MangaScreen'
import AnimeScreen from './screens/AnimeScreen'


function App() {

    return (
        <Provider store = {store}>
            <BrowserRouter>

                <Route 
                    exact 
                    path = '/anime'
                    render = {() => <AnimeScreen /> }
                />

                <Route 
                    exact 
                    path = '/manga'
                    render = {() => <MangaScreen /> }
                />
                
            </BrowserRouter>
        </Provider>
    );
}

export default App;
