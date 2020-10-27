export const moviesReducer = (state = { movies: [] }, action) => {
    switch (action.type) {
        case 'MOVIE_DETAILS_REQUEST':
            return { loading: true, ...state }
    
        case 'MOVIE_DETAILS_SUCCESS':
            window.localStorage.setItem(
                'movies', 
                JSON.stringify([...state.movies, action.payload])
            )
            return { loading: false, movies : [...state.movies, action.payload]}

        case 'MOVIE_DETAILS_FAIL':
            return { loading: false, ...state }

        default:
            return state
    }
}