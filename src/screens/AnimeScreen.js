import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeDetails } from '../actions/animeMangaActions'
import AnimeMangaComponent from '../components/AnimeMangaComponent'
import PageLinksComponent from '../components/PageLinksComponent'

import '../styles/Screen.css'

const AnimeScreen = () => {

    const dispatch = useDispatch()

    const { anime } = useSelector(state => state.anime)

    const [animeId, setAnimeId] = useState('')

    const addAnime = (e) => {
        e.preventDefault()
        dispatch( getAnimeDetails(animeId) )
    }

    console.log(window.innerWidth)

    return (
        <div style = {{ 
            width: window.innerWidth > 1100 ? "70%" : "95%", 
            margin: "20px auto" 
            }}
        >

            {/* will also depend upon window.innerWidth
            dispaly a navbar component otherwise */}
            <PageLinksComponent />
            
            <h1 style = {{ textAlign: 'center' }} >Plan to Watch Anime</h1>
            <hr style = {{ color: 'white' }}></hr>

            <form onSubmit = { addAnime }>
                <h6 
                    className = {window.innerHeight > 1100 ? 'row' : 'row ml-1' }
                >
                    Add a New Entry
                </h6>
                <div className='form-group row'>
                    <input 
                        type='text'
                        className={
                            `form-control col-md-3 col-sm-5 ${ window.innerWidth > 1100 ? '' : 'ml-1' }`
                        } 
                        value = {animeId}
                        placeholder = 'Enter Anime Id'
                        onChange = { (e) => setAnimeId(e.target.value) }
                        style = {{backgroundColor: 'rgb(14, 22, 29)', color: 'white'}}
                    />
                    <button 
                        type = 'submit' 
                        className = 'btn btn-outline-primary col-md-1 ml-5 col-sm-4'
                    >Add</button>

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
                        source: an.source,
                        mal_id: an.mal_id
                    }

                    return <AnimeMangaComponent 
                        key = { index } 
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
