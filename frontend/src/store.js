import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { animeReducer, mangaReducer } from "./reducers/animeMangaReducers";
import { moviesReducer } from "./reducers/moviesReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const reducers = combineReducers({
	anime: animeReducer,
	manga: mangaReducer,
	movies: moviesReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer
});

const animeFromLocalStorage = localStorage.getItem("anime")
	? JSON.parse(localStorage.getItem("anime"))
	: {};

const mangaFromLocalStorage = localStorage.getItem("manga")
	? JSON.parse(localStorage.getItem("manga"))
	: {};

const moviesFromLocalStorage = localStorage.getItem("movies")
	? JSON.parse(localStorage.getItem("movies"))
	: {};

const userInfoFromLocalStorage = localStorage.getItem("userLogin")
	? JSON.parse(localStorage.getItem("userLogin"))
	: {};

const initialState = {
	anime: animeFromLocalStorage,
	manga: mangaFromLocalStorage,
	movies: moviesFromLocalStorage,
	userLogin: userInfoFromLocalStorage
};

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
