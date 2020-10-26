const initialState = {
    anime: [],
    manga: []
}

export const animeReducer = (state = initialState, action) => {

    switch ( action.type ) {

        case 'ANIME_DETAILS_REQUEST':
            return { loading: true }

        case 'ANIME_DETAILS_SUCCESS':
            console.log('This is the state', state)
            return { loading: false, anime: action.payload }
            // return { loading: false, anime: [...state.anime, ...action.payload], ...state }

        case 'ANIME_DETAILS_FAIL':
            return { loading: false }

        default:
            return state
    }
}