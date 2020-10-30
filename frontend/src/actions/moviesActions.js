import axios from 'axios'

export const getMovieDetails = (token, apiKey, imdbId) => async (dispatch) => {
    try {
        dispatch({ type: 'MOVIE_DETAILS_REQUEST' })

        apiKey = apiKey === '' ? process.env.REACT_APP_OPENDB_API_KEY : apiKey 

        const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`)

        dispatch({
            type: "MOVIE_DETAILS_SUCCESS",
            payload: data
        })

        const config = {
            headers : {
                'Content-Type' : 'application/json',
                authorization: `Bearer ${token}`
            }
        }

        const resp = await axios.post('/movie', data, config)

    }

    catch (error) {

        dispatch({ 
            type: 'ANIME_DETAILS_FAIL', 
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }
}


export const getMoivesDetailsFromBackend = (token) => (dispatch) => {
    try {

        dispatch({type: 'MOVIE_DETAILS_REQUEST_BACKEND'})

        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        const { data } = axios.get('/movies', config)

        dispatch({
            type: 'MOVIE_DETAILS_SUCCESS_BACKEND',
            payload: data
        })

        window.localStorage.setItem("movies", data)

    }

    catch (error) {
        dispatch({
            type: 'MOVIE_DETAILS_FAIL_BACKEND',
            payload: error
        })
    }
}


export const deleteMovieDetails = (movieId) => (dispatch) => {
    dispatch({
        type: 'MOVIE_DETAILS_DELETE',
        payload: movieId
    })
}