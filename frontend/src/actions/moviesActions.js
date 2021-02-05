import axios from "axios";

export const getMovieDetails = (token, apiKey, imdbId) => async (dispatch, getState) => {
	try {
		dispatch({ type: "MOVIE_DETAILS_REQUEST" });

		apiKey = apiKey === "" ? process.env.REACT_APP_OPENDB_API_KEY : apiKey;

		const { data } = await axios.get(
			`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`
		);

		dispatch({
			type: "MOVIE_DETAILS_SUCCESS",
			payload: data
		});

		const config = {
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`
			}
		};

		await axios.post("/movies", data, config);

		localStorage.setItem("movies", JSON.stringify(getState().movies.movies));
	} catch (error) {
		dispatch({
			type: "ANIME_DETAILS_FAIL",
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message
		});
	}
};

export const getMoivesDetailsFromBackend = token => async dispatch => {
	try {
		dispatch({ type: "MOVIE_DETAILS_REQUEST_BACKEND" });

		const config = {
			headers: {
				authorization: `Bearer ${token}`
			}
		};

		const { data } = await axios.get("/movies", config);

		dispatch({
			type: "MOVIE_DETAILS_SUCCESS_BACKEND",
			payload: data
		});

		localStorage.setItem("movies", JSON.stringify(data));
	} catch (error) {
		console.log(error);
		dispatch({
			type: "MOVIE_DETAILS_FAIL_BACKEND",
			payload: error
		});
	}
};

export const deleteMovieDetails = (token, movieId) => async dispatch => {
	dispatch({
		type: "MOVIE_DETAILS_DELETE",
		payload: movieId
	});

	const config = {
		headers: {
			authorization: `Bearer ${token}`
		}
	};

	await axios.delete(`/movies/${movieId}`, config);
};
