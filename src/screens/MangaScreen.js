import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMangaDetails } from '../actions/animeMangaActions'

import AnimeMangaComponent from '../components/AnimeMangaComponent'

const MangaScreen = () => {

    const dispatch = useDispatch()

    const { manga } = useSelector(state => state.manga)

    useEffect(() => {

        // this is how the action creator is mapped to the reducers
        
        dispatch(getMangaDetails(1))


    }, [])

    return (
        <div style = {{ "width": "70%", "margin": "0 auto" }} >
            <h1 style = {{ textAlign: 'center' }} >Plan to Read Manga</h1>

            {
                manga.map((man, index) => {

                    let arr = {
                        airing: man.publishing,
                        duration: man.volumes, // no duration for mangas so duration = volumes
                        episodes: man.chapters,
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
