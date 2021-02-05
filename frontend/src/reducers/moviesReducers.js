export const moviesReducer = (state = {}, action) => {
	switch (action.type) {
		case "MOVIE_DETAILS_REQUEST":
			return { loading: true, ...state };

		case "MOVIE_DETAILS_SUCCESS":
			const m1 = { loading: false, movies: [...state.movies, action.payload] };
			localStorage.setItem("movies", JSON.stringify(m1));
			return m1;

		case "MOVIE_DETAILS_FAIL":
			return { loading: false, ...state };

		case "MOVIE_DETAILS_REQUEST_BACKEND":
			return { loading: true, ...state };

		case "MOVIE_DETAILS_SUCCESS_BACKEND":
			const m2 = { loading: false, movies: [...action.payload] };
			localStorage.setItem("movies", JSON.stringify(m2));
			return m2;

		case "MOVIE_DETAILS_FAIL_BACKEND":
			return { loading: false, ...state };

		case "MOVIE_DETAILS_DELETE":
			let movies = state.movies.filter(m => m.imdbID !== action.payload);

			window.localStorage.setItem("movies", JSON.stringify({ movies }));

			return { loading: false, movies };

		default:
			return state;
	}
};
