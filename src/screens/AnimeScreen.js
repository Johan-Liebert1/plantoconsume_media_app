import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeDetails } from '../actions/animeMangaActions'
import AnimeMangaComponent from '../components/AnimeMangaComponent'
import PageLinksComponent from '../components/PageLinksComponent'

const AnimeScreen = () => {

    const dispatch = useDispatch()

    const { anime } = useSelector(state => state.anime)

    const [animeId, setAnimeId] = useState('')

    useEffect(() => {

        // this is how the action creator is mapped to the reducers
        // dispatch( getAnimeDetails(19) )
        // dispatch( getAnimeDetails(457) )
        // dispatch( getAnimeDetails(820) )
        // dispatch( getAnimeDetails(39547) )

    }, [])

    const addAnime = (e) => {
        e.preventDefault()
        dispatch( getAnimeDetails(animeId) )
    }

    return (
        <div style = {{ "width": "70%", "margin": "20px auto" }} >
            <PageLinksComponent />
            <h1 style = {{ textAlign: 'center' }} >Plan to Watch Anime</h1>
            <hr style = {{ color: 'white' }}></hr>

            <form onSubmit = {addAnime} >
                <h6>Add a New Entry</h6>
                <div className='form-group'>
                    <input 
                        type='text'
                        value = {animeId}
                        placeholder = 'Enter Anime Id'
                        onChange = { (e) => setAnimeId(e.target.value) }
                    />
                </div>
                <div className = 'form-group'>
                    <button type = 'submit' className = 'btn-sm btn-primary'>Add</button>
                </div>
            </form>

            {
                anime.map((an, index) => {

                    let arr = {
                        airing: an.airing,
                        duration: an.duration,
                        episodes: an.episodes,
                        genres: an.genres.map(g => g.name),
                        airDate: an['aired'].string,
                        image: an.image_url,
                        title: an.title,
                        type: an.type,
                        href: an.url,
                        score: an.score,
                        rating: an.rating,
                        source: an.source
                    }

                    return <AnimeMangaComponent 
                                key = {index} 
                                arr = { arr }
                                what = 'anime'
                            />
                })
            }

        <footer 
            style = {{ width: '100%', height: '100px', textAlign: 'center', marginTop: "75px" }}
        >
            API Used : <a href = "https://jikan.moe/" target = "_blank">Jikan API</a>
        </footer>
            
        </div>
    )
}

export default AnimeScreen
