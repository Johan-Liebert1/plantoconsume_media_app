import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMangaDetails } from '../actions/animeMangaActions'

import MediaDetails from '../components/MediaDetails'

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
                        mal_score: man.score,
                    }

                    return <MediaDetails 
                                key = {index} 
                                arr = { arr }
                                what = 'manga'
                            />
                })
            }

        </div>
    )
}

export default MangaScreen
