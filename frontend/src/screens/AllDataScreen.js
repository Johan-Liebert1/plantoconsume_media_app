import React from 'react'

import { useSelector } from 'react-redux'

import '../styles/AllData.css'
import PageLinksComponent from '../components/PageLinksComponent'

const AllDataScreen = () => {

    const anime = useSelector(state => state.anime.anime)
    const manga = useSelector(state => state.manga.manga)
    const movies = useSelector(state => state.movies.movies)

    const all_anime = anime.map(an => {
        return { 
            id: an.mal_id,
            name: an.title
        }
    })
    const all_manga = manga.map(man => {
        return { 
            id: man.mal_id,
            name: man.title
        }
    })
    const all_movies = movies.map(mv => {
        return {
            id: mv.imdbID,
            name: mv.Title
        }
    })

    return (
        <div className='container'>
            <PageLinksComponent />
            <ul className='list-group list-group-flush'>
                {
                    all_anime.map(anime =>
                        <li className='list-group-item'>
                            <strong> Name - </strong> {anime.name}
                            <strong> ID - </strong> {anime.id}
                        </li>
                    )
                }
            </ul>

            <ul>
                {
                    all_manga.map(manga =>
                        <li 
                            className='list-group-item'
                            style = {{backgroundColor : 'rgb(14, 22, 29)'}}
                        >
                            <p><strong> Name - </strong> {manga.name}</p>
                            <p><strong> ID - </strong> {manga.id}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default AllDataScreen
