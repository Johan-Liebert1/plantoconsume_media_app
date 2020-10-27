import axios from 'axios'

export const getMovieDetails = (imdbId) => async (dispatch) => {
    try {
        dispatch({ type: 'MOVIE_DETAILS_REQUEST' })

        const key = process.env.OPENDB_API_KEY

        const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${key}&i=${imdbId}`)

        dipatch({
            type: "MOVIE_DETAILS_SUCCESS",
            payload: data
        })

    }

    catch (error) {

        dispatch({ 
            type: 'ANIME_DETAILS_FAIL', 
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }
}