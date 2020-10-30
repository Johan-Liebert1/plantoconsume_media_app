import { createStore, combineReducers, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import { animeReducer, mangaReducer } from './reducers/animeMangaReducers'
import { moviesReducer } from './reducers/moviesReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

const reducers = combineReducers({
    anime: animeReducer,
    manga: mangaReducer,
    movies: moviesReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})

const animeFromLocalStorage = window.localStorage.getItem('anime') ? 
    JSON.parse(window.localStorage.getItem('anime')) : []

const mangaFromLocalStorage = window.localStorage.getItem('manga') ? 
    JSON.parse(window.localStorage.getItem('manga')) : []

const moviesFromLocalStorage = window.localStorage.getItem('movies') ? 
    JSON.parse(window.localStorage.getItem('movies')) : []

const initialState = {
    anime: {
        anime: animeFromLocalStorage
    },

    manga : {
        manga: mangaFromLocalStorage
    },

    movies: {
        movies: moviesFromLocalStorage
    }
}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store