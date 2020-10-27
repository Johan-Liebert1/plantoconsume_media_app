import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAnimeDetails } from '../actions/animeMangaActions'
import AnimeMangaComponent from '../components/AnimeMangaComponent'

const AnimeScreen = () => {

    const dispatch = useDispatch()

    const { anime } = useSelector(state => state.anime)

    useEffect(() => {

        // this is how the action creator is mapped to the reducers
        // dispatch( getAnimeDetails(19) )
        // dispatch( getAnimeDetails(457) )
        // dispatch( getAnimeDetails(820) )

    }, [])

    console.log('anime: ', anime)

    return (
        <div style = {{ "width": "70%", "margin": "0 auto" }} >
            <h1 style = {{ textAlign: 'center' }} >Plan to Watch Anime</h1>

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
                        rating: an.rating
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
