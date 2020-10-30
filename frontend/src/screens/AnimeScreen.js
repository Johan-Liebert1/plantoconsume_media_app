import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeDetails } from '../actions/animeMangaActions'
import AnimeMangaComponent from '../components/AnimeMangaComponent'
import PageLinksComponent from '../components/PageLinksComponent'
import MobileNavbarComponent from '../components/MobileNavbarComponent'
import DesktopNavbarComponent from '../components/DesktopNavbarComponent'


const AnimeScreen = () => {

    const dispatch = useDispatch()

    const { anime, loading } = useSelector(state => state.anime)

    const { userInfo } = useSelector(state => state.userLogin)

    const [animeId, setAnimeId] = useState('')

    // useEffect(() => {

    //     console.log('useEffect called')

    //     if ( userInfo && !window.localStorage.getItem('anime') ) {
    //         dispatch( getAnimeDetailsFromBackend(userInfo.token) )
    //     }

    // }, [])

    const addAnime = (e) => {
        e.preventDefault()

        const animeExists = anime.find(a => a.mal_id === Number(animeId))

        if (!animeExists)
            dispatch( getAnimeDetails(userInfo.token, animeId) )

    }

    const condb = window.innerWidth > 1100 // condition big
    const conds = window.innerWidth > 580

    return (
        <>
        {
            condb && <DesktopNavbarComponent />
        }
        <div style = {{ 
            width: condb ? "70%" : "95%", 
            margin: "20px auto" 
            }}
        >

            {/* will also depend upon window.innerWidth
            dispaly a navbar component otherwise */}
            {
                condb ? <PageLinksComponent /> : <MobileNavbarComponent />
            }

            <h1 style = {{ 
                textAlign: 'center',
                fontSize: conds ? '' : '2.0rem'  
                }} 
            >Plan to Watch Anime</h1>

            <form onSubmit = { addAnime }>
                <h6 
                    className = {condb ? 'row' : 'row ml-1' }
                >
                    Add a New Entry
                </h6>
                <div className='form-group row'>
                    <input 
                        type='text'
                        className={
                            `form-control col-md-3 col-sm-5 col-7 ${ condb ? '' : conds ? 'ml-1' : 'ml-2' }`
                        } 
                        value = {animeId}
                        placeholder = 'Enter Anime Id'
                        onChange = { (e) => setAnimeId(e.target.value) }
                        style = {{backgroundColor: 'rgb(14, 22, 29)', color: 'white'}}
                    />
                    <button 
                        type = 'submit' 
                        className = {
                            `btn btn-outline-primary col-md-1 col-sm-4 col-3 
                            ${condb ? 'ml-5' : conds ? '' : 'ml-2'}`
                        }
                    >Add</button>

                </div>
            </form>
            
            { loading && <p>Loading details...</p> }

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
            API Used : <a href = "https://jikan.moe/" target = "_blank" rel="noreferrer">Jikan API</a>
        </footer>
            
        </div>
        </>
    )
}

export default AnimeScreen
