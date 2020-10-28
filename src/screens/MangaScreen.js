import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMangaDetails } from '../actions/animeMangaActions'

import AnimeMangaComponent from '../components/AnimeMangaComponent'
import PageLinksComponent from '../components/PageLinksComponent'

import '../styles/Screen.css'

const MangaScreen = () => {
    const [mangaId, setMangaId] = useState('')

    const dispatch = useDispatch()

    const { manga } = useSelector(state => state.manga)

    useEffect(() => {

        // this is how the action creator is mapped to the reducers
        
        // dispatch(getMangaDetails(1))
        // dispatch(getMangaDetails(2))


    }, [])

    const addManga = (e) => {
        e.preventDefault()
        dispatch(getMangaDetails(mangaId))
    }

    return (
        <div style = {{ 
            width: window.innerWidth > 1100 ? "70%" : "95%", 
            margin: "20px auto" }}
        >
            <PageLinksComponent />
            <h1 style = {{ textAlign: 'center' }} >Plan to Read Manga</h1>

            <hr style = {{ color: 'white' }}></hr>

            <form onSubmit = {addManga} >
                <h6 
                    className = {window.innerHeight > 1100 ? 'row' : 'row ml-1' }
                >Add a New Entry</h6>

                <div className='form-group row'>
                    <input 
                        type='text'
                        className={
                            `form-control col-md-3 col-sm-5 ${ window.innerWidth > 1100 ? '' : 'ml-1' }`
                        } 
                        value = {mangaId}
                        placeholder = 'Enter Manga Id'
                        onChange = { (e) => setMangaId(e.target.value) }
                        style = {{backgroundColor: 'rgb(14, 22, 29)', color: 'white'}}
                    />
                    <button 
                        type = 'submit' 
                        className = 'btn btn-outline-primary col-md-1 ml-5 col-sm-4'
                    > Add</button>
                </div>
            </form>

            {
                manga.map((man, index) => {

                    let arr = {
                        airing: man.publishing,
                        duration: man.volumes === null ? '-' : man.volumes, 
                        // no duration for mangas so duration = volumes
                        episodes: man.chapters === null ? '-' : man.chapters,
                        genres: man.genres.map(g => g.name),
                        airDate: man['published'].string,
                        image: man.image_url,
                        title: man.title,
                        // type: man.type, no type for manga
                        href: man.url,
                        score: man.score,
                        rating: man.rating,
                        mal_id: man.mal_id
                    }

                    return <AnimeMangaComponent 
                                key = {index} 
                                arr = { arr }
                                what = 'manga'
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

export default MangaScreen
