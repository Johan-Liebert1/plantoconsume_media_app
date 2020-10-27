import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails } from '../actions/moviesActions'
import MovieComponent from '../components/MovieComponent'
import PageLinksComponent from '../components/PageLinksComponent'

const MoviesScreen = () => {
    const [movieId, setMovieId] = useState('')

    const dispatch = useDispatch()

    const movies = useSelector(state => state.movies)

    useEffect(() => {

        // dispatch( getMovieDetails('tt0120737') )

    }, [])

    const addMovie = (e) => {
        e.preventDefault()
        dispatch(getMovieDetails(movieId))
    }

    return (
        <div style = {{ "width": "70%", "margin": "20px auto" }}>
            <PageLinksComponent />
            <h1 style = {{ textAlign: 'center' }} >Plan to Watch Movies</h1>
            <hr style = {{ color: 'white' }}></hr>
            
            <form onSubmit = {addMovie} >
                <h6>Add a New Entry</h6>
                <div className='form-group'>
                    <input 
                        type='text'
                        value = {movieId}
                        placeholder = 'Enter Movie Id'
                        onChange = { (e) => setMovieId(e.target.value) }
                    />
                </div>
                <div className = 'form-group'>
                    <button type = 'submit' className = 'btn-sm btn-primary'>Add</button>
                </div>
            </form>

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
