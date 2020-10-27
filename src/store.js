import { createStore, combineReducers, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import { animeReducer, mangaReducer } from './reducers/animeMangaReducers'
import { moviesReducer } from './reducers/moviesReducers'

const reducers = combineReducers({
    anime: animeReducer,
    manga: mangaReducer,
    movies: moviesReducer
})

const initialState = {}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store