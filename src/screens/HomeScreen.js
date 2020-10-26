import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeDetails } from '../actions/animeMangaActions'
import MediaDetails from '../components/MediaDetails'

const HomeScreen = () => {

    const dispatch = useDispatch()

    const { anime } = useSelector(state => state.anime)

    useEffect(() => {

        // this is how the action creator is mapped to the reducers
        // dispatch( getAnimeDetails(19) )

    }, [])

    console.log('anime: ', anime)

    return (
        <div style = {{ "width": "70%", "margin": "0 auto" }} >
            <h1>This is the home screen</h1>

            {
                anime.map((an, index) => {

                    let arr = {
                        airing: an.airing,
                        duration: an.duration,
                        episodes: an.episodes,
                        genres: an.genres.map(g => g.name),
                        airDate: an['aired'].string,
                        image: an.image_url,
                        title: an.title
                    }

                    return <MediaDetails 
                                key = {index} 
                                arr = { arr }
                            />
                })
            }

        </div>
    )
}

export default HomeScreen
