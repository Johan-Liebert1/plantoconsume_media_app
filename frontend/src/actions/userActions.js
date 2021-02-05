import axios from "axios";
import { getAnimeListFromBackend, getMangaListFromBackend } from "./animeMangaActions";
import { getMoivesDetailsFromBackend } from "./moviesActions";

export const userLogin = (username, password) => async dispatch => {
	try {
		dispatch({ type: "USER_LOGIN_REQUEST" });

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		const { data } = await axios.post("/login", { username, password }, config);

		dispatch({
			type: "USER_LOGIN_SUCCESS",
			payload: data
		});

		localStorage.setItem("userLogin", JSON.stringify({ userLogin: data }));

		dispatch(getAnimeListFromBackend(data.token));
		dispatch(getMangaListFromBackend(data.token));
		dispatch(getMoivesDetailsFromBackend(data.token));
	} catch (error) {
		dispatch({
			type: "USER_LOGIN_FAIL",
			payload: error
		});
	}
};

export const userRegister = (username, password) => async dispatch => {
	try {
		dispatch({ type: "USER_REGISTER_REQUEST" });

		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};

		const { data } = await axios.post("/register", { username, password }, config);

		dispatch({
			type: "USER_REGISTER_SUCCESS",
			payload: data
		});

		dispatch({
			type: "USER_LOGIN_SUCCESS",
			payload: data
		});

		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: "USER_REGISTER_FAIL",
			payload: error
		});
	}
};

export const userLogout = () => dispatch => {
	dispatch({
		type: "USER_LOGOUT_REQUEST"
	});
	localStorage.setItem("userLogin", "");
	localStorage.setItem("anime", "");
	localStorage.setItem("manga", "");
	localStorage.setItem("movies", "");
};
