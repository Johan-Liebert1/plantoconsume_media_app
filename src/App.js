import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import HomeScreen from './screens/HomeScreen'

import store from './store'

function App() {

    return (
        <Provider store = {store}>
            <BrowserRouter>

                <Route 
                    exact 
                    path = '/'
                    render = {() => <HomeScreen /> }
                />
                
            </BrowserRouter>
        </Provider>
    );
}

export default App;
