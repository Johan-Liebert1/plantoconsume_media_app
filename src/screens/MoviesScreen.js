import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails } from '../actions/moviesActions'
import MovieComponent from '../components/MovieComponent'
import PageLinksComponent from '../components/PageLinksComponent'

const MoviesScreen = () => {

    const dispatch = useDispatch()

    const movies = useSelector(state => state.movies)

    useEffect(() => {

        dispatch( getMovieDetails('tt0120737') )

    }, [])

    return (
        <div style = {{ "width": "70%", "margin": "0 auto" }}>
            <PageLinksComponent />
            <h1 style = {{ textAlign: 'center' }} >Plan to Watch Movies</h1>
            
            {
                movies.movies.map((movie, index) => {

                    let arr = {
                        duration: movie.Runtime,
                        genres: movie.Genre, // this is just a string unlike with Jikan API
                        airDate: movie.Released,
                        image: movie.Poster,
                        title: movie.Title,
                        type: movie.Type,
                        href: `https://www.imdb.com/title/${movie.imdbID}`,
                        score: movie.imdbRating,
                        country: movie.Country,
                        metascore: movie.Metascore
                    }

                    return <MovieComponent 
                                key = {index}
                                arr = {arr}
                            />

                })
            }

        <footer 
            style = {{ width: '100%', height: '100px', textAlign: 'center', marginTop: "75px" }}
        >
            API Used : <a href = "http://www.omdbapi.com/" target = "_blank">OMDb API</a>
        </footer>

        </div>
    )
}

export default MoviesScreen
