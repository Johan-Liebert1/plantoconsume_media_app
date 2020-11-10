export const moviesReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case 'MOVIE_DETAILS_REQUEST':
            return { loading: true, ...state }
    
        case 'MOVIE_DETAILS_SUCCESS':

            return { loading: false, movies : [...state.movies, action.payload]}

        case 'MOVIE_DETAILS_FAIL':
            return { loading: false, ...state }


        case 'MOVIE_DETAILS_REQUEST_BACKEND':
            return { loading: true, ...state }
    
        case 'MOVIE_DETAILS_SUCCESS_BACKEND':
            return { loading: false, movies : [...action.payload] }

        case 'MOVIE_DETAILS_FAIL_BACKEND':
            return { loading: false, ...state }


        case 'MOVIE_DETAILS_DELETE':
            let movies = state.movies.filter(m => m.imdbID !== action.payload)

            window.localStorage.setItem(
                'movies',
                JSON.stringify(movies)
            )

            return { loading: false, movies }

        default:
            return state
    }
}