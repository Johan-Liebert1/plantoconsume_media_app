import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMangaDetails } from '../actions/animeMangaActions'

import AnimeMangaComponent from '../components/AnimeMangaComponent'
import PageLinksComponent from '../components/PageLinksComponent'

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
        <div style = {{ "width": "70%", "margin": "20px auto" }} >
            <PageLinksComponent />
            <h1 style = {{ textAlign: 'center' }} >Plan to Read Manga</h1>

            <hr style = {{ color: 'white' }}></hr>

            <form onSubmit = {addManga} >
                <h6>Add a New Entry</h6>
                <div className='form-group'>
                    <input 
                        type='text'
                        value = {mangaId}
                        placeholder = 'Enter Manga Id'
                        onChange = { (e) => setMangaId(e.target.value) }
                    />
                </div>
                <div className = 'form-group'>
                    <button type = 'submit' className = 'btn-sm btn-primary'>Add</button>
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
                        rating: man.rating
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
