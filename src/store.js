import { createStore, combineReducers, applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import { animeReducer } from './reducers/animeMangaReducers'

const reducers = combineReducers({
    anime: animeReducer
})

const initialState = {}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store