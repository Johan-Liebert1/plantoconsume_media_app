import axios from 'axios' 

export const getAnimeDetails = (token, animeId) => async (dispatch) => {
    // the => (dispatch) => {...} is necessary
    try {

        dispatch({ type: 'ANIME_DETAILS_REQUEST' })

        const { data } = await axios.get(`https://api.jikan.moe/v3/anime/${animeId}`)

        dispatch({ 
            type: 'ANIME_DETAILS_SUCCESS', 
            payload : data 
        })

        const config = {
            headers : {
                'Content-Type' : 'application/json',
                authorization: `Bearer ${token}`
            }
        }

        const resp = await axios.post(`/anime`, data, config)

    }

    catch (error) {

        dispatch({ 
            type: 'ANIME_DETAILS_FAIL', 
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }

}


export const getMangaDetails = (token, mangaId) => async (dispatch) => {
    try {
        dispatch({ type: 'MANGA_DETAILS_REQUEST' })

        const { data } = await axios.get(`https://api.jikan.moe/v3/manga/${mangaId}`)

        dispatch({ 
            type: 'MANGA_DETAILS_SUCCESS',
            payload: data
         })

        
         const config = {
            headers : {
                'Content-Type' : 'application/json',
                authorization: `Bearer ${token}`
            }
        }

        const resp = await axios.post(`/manga`, data, config)

    }

    catch (error) {

        dispatch({ 
            type: 'ANIME_DETAILS_FAIL', 
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }
}


// should do this when the user logs in 
export const getAnimeListFromBackend = (token) => async (dispatch) => {
    try {
        console.log('inside getlistfrombackend')

        dispatch({ type : 'ANIME_DETAILS_REQUEST' })

        const config = {
            headers : {
                authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.get('/anime', config)

        console.log(data)

        for (let i = 0; i < data; i++) {
            dispatch({
                type: "ANIME_DETAILS_SUCCESS",
                payload: data[i]
            })
        }        

        window.localStorage.setItem('anime', JSON.stringify(data))

    }

    catch (error) {

        dispatch({
            type: 'ANIME_DETAILS_FAIL',
            payload: error
        })

    }
}


// should do this when the user logs in 
export const getMangaListFromBackend = (token) => async (dispatch) => {
    try {
        dispatch({ type : 'MANGA_DETAILS_REQUEST' })

        const config = {
            headers : {
                authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.get('/manga', config)

        console.log(data)

        for (let i = 0; i < data; i++) {

            dispatch({
                type: "MANGA_DETAILS_SUCCESS",
                payload: data[i]
            })

        }        

        window.localStorage.setItem('manga', JSON.stringify(data))

    }

    catch (error) {

        dispatch({
            type: 'MANGA_DETAILS_FAIL',
            payload: error
        })

    }
}


export const deleteAnimeDetails = (animeId) => (dispatch) => {
    dispatch({
        type: 'ANIME_DETAILS_DELETE',
        payload: animeId
    })
}


export const deleteMangaDetails = (mangaId) => (dispatch) => {
    
    dispatch({
        type: 'MANGA_DETAILS_DELETE',
        payload: mangaId
    })
}