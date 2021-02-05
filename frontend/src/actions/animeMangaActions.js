import axios from "axios";

export const getAnimeDetails = (token, animeId) => async dispatch => {
	// the => (dispatch) => {...} is necessary
	try {
		dispatch({ type: "ANIME_DETAILS_REQUEST" });

		const { data } = await axios.get(`https://api.jikan.moe/v3/anime/${animeId}`);

		dispatch({
			type: "ANIME_DETAILS_SUCCESS",
			payload: data
		});

		const config = {
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`
			}
		};

		const animeDetails = {
			airing: data.airing,
			duration: data.duration,
			episodes: data.episodes,
			genres: data.genres,
			aired: data.aired,
			image_url: data.image_url,
			title: data.title,
			type: data.type,
			url: data.url,
			score: data.score,
			rating: data.rating,
			source: data.source,
			mal_id: data.mal_id
		};

		await axios.post(`/anime`, animeDetails, config);
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

export const getMangaDetails = (token, mangaId) => async dispatch => {
	try {
		dispatch({ type: "MANGA_DETAILS_REQUEST" });

		const { data } = await axios.get(`https://api.jikan.moe/v3/manga/${mangaId}`);

		dispatch({
			type: "MANGA_DETAILS_SUCCESS",
			payload: data
		});

		const config = {
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`
			}
		};

		const mangaDetails = {
			mal_id: data.mal_id,
			url: data.url,
			publishing: data.publishing,
			volumes: data.volumes,
			chapters: data.chapters,
			genres: data.genres,
			published: data.published,
			image_url: data.image_url,
			title: data.title,
			score: data.score,
			rating: data.rating
		};

		await axios.post(`/manga`, mangaDetails, config);
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

// should do this when the user logs in
export const getAnimeListFromBackend = token => async dispatch => {
	try {
		dispatch({ type: "ANIME_DETAILS_REQUEST_BACKEND" });

		const config = {
			headers: {
				authorization: `Bearer ${token}`
			}
		};

		const { data } = await axios.get("/anime", config);

		dispatch({
			type: "ANIME_DETAILS_SUCCESS_BACKEND",
			payload: data
		});
	} catch (error) {
		dispatch({
			type: "ANIME_DETAILS_FAIL_BACKEND",
			payload: error
		});
	}
};

// should do this when the user logs in
export const getMangaListFromBackend = token => async dispatch => {
	try {
		dispatch({ type: "MANGA_DETAILS_REQUEST_BACKEND" });

		const config = {
			headers: {
				authorization: `Bearer ${token}`
			}
		};

		const { data } = await axios.get("/manga", config);

		dispatch({
			type: "MANGA_DETAILS_SUCCESS_BACKEND",
			payload: data
		});
	} catch (error) {
		dispatch({
			type: "MANGA_DETAILS_FAIL_BACKEND",
			payload: error
		});
	}
};

export const deleteAnimeDetails = (token, animeId) => async dispatch => {
	dispatch({
		type: "ANIME_DETAILS_DELETE",
		payload: animeId
	});

	const config = {
		headers: {
			authorization: `Bearer ${token}`
		}
	};

	await axios.delete(`/anime/${animeId}`, config);
};

export const deleteMangaDetails = (token, mangaId) => async dispatch => {
	dispatch({
		type: "MANGA_DETAILS_DELETE",
		payload: mangaId
	});

	const config = {
		headers: {
			authorization: `Bearer ${token}`
		}
	};

	await axios.delete(`/manga/${mangaId}`, config);
};
