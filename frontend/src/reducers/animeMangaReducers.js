export const animeReducer = (state = {}, action) => {
	console.log(state);
	switch (action.type) {
		case "ANIME_DETAILS_REQUEST":
			return { loading: true, anime: state.anime };

		case "ANIME_DETAILS_SUCCESS":
			const a1 = { loading: false, anime: [...state.anime, action.payload] };
			localStorage.setItem("anime", JSON.stringify(a1));
			return a1;

		case "ANIME_DETAILS_FAIL":
			return { loading: false, anime: state.anime };

		// make requests to the backend server
		// action.payload is a list of objects

		case "ANIME_DETAILS_REQUEST_BACKEND":
			return { loading: true, anime: state.anime };

		case "ANIME_DETAILS_SUCCESS_BACKEND":
			const a2 = { loading: false, anime: [...action.payload] };
			localStorage.setItem("anime", JSON.stringify(a2));
			return a2;

		case "ANIME_DETAILS_FAIL_BACKEND":
			return { loading: false, anime: state.anime };

		case "ANIME_DETAILS_DELETE":
			let anime = state.anime.filter(an => an.mal_id !== action.payload);

			localStorage.setItem("anime", JSON.stringify({ loading: false, anime }));

			return { loading: false, anime };

		default:
			return state;
	}
};

export const mangaReducer = (state = {}, action) => {
	switch (action.type) {
		case "MANGA_DETAILS_REQUEST":
			return { loading: true, manga: state.manga };

		case "MANGA_DETAILS_SUCCESS":
			const m3 = { loading: false, manga: [...state.manga, action.payload] };
			localStorage.setItem("manga", JSON.stringify(m3));

			return m3;

		case "MANGA_DETAILS_FAIL":
			return { loading: false, manga: state.manga };

		case "MANGA_DETAILS_REQUEST_BACKEND":
			return { loading: true, manga: state.manga };

		case "MANGA_DETAILS_SUCCESS_BACKEND":
			const m4 = { loading: false, manga: [...action.payload] };
			localStorage.setItem("manga", JSON.stringify(m4));
			return m4;

		case "MANGA_DETAILS_FAIL_BACKEND":
			return { loading: false, manga: state.manga };

		case "MANGA_DETAILS_DELETE":
			let manga = state.manga.filter(man => man.mal_id !== action.payload);

			localStorage.setItem("manga", JSON.stringify({ loading: false, manga }));

			return { loading: false, manga };

		default:
			return state;
	}
};
