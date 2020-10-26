export const animeReducer = (state = { anime: [] }, action) => {

    switch ( action.type ) {

        case 'ANIME_DETAILS_REQUEST':
            return { loading: true, ...state }

        case 'ANIME_DETAILS_SUCCESS':
            return { loading: false, anime: [...state.anime, action.payload] }
            // return { loading: false, anime: [...state.anime, ...action.payload], ...state }

        case 'ANIME_DETAILS_FAIL':
            return { loading: false, ...state }

        default:
            return state
    }
}