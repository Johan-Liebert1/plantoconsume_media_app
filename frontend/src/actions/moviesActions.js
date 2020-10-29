import axios from 'axios'

export const getMovieDetails = (apiKey, imdbId) => async (dispatch) => {
    try {
        dispatch({ type: 'MOVIE_DETAILS_REQUEST' })

        apiKey = apiKey === '' ? process.env.REACT_APP_OPENDB_API_KEY : apiKey 

        const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`)

        dispatch({
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


export const deleteMovieDetails = (movieId) => (dispatch) => {
    dispatch({
        type: 'MOVIE_DETAILS_DELETE',
        payload: movieId
    })
}