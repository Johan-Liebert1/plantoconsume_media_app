import axios from 'axios' 

export const getAnimeDetails = (animeId) => async (dispatch) => {

    try {

        dispatch({ type: 'ANIME_DETAILS_REQUEST' })

        const { data } = await axios.get(`https://api.jikan.moe/v3/anime/${animeId}`)

        dispatch({ 
            type: 'ANIME_DETAILS_SUCCESS', 
            payload : data 
        })
    }

    catch (error) {

        dispatch({ 
            type: 'ANIME_DETAILS_FAIL', 
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }

}


export const getMangaDetails = (mangaId) => async (dispatch) => {
    try {
        dispatch({ type: 'MANGA_DETAILS_REQUEST' })

        const { data } = await axios.get(`https://api.jikan.moe/v3/manga/${mangaId}`)

        dispatch({ 
            type: 'MANGA_DETAILS_SUCCESS',
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