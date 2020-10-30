import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails } from '../actions/moviesActions'
import DesktopNavbarComponent from '../components/DesktopNavbarComponent'
import MobileNavbarComponent from '../components/MobileNavbarComponent'
import MovieComponent from '../components/MovieComponent'
import PageLinksComponent from '../components/PageLinksComponent'


const MoviesScreen = () => {
    const [movieId, setMovieId] = useState('')
    const [apiKey, setApiKey] = useState('')

    const dispatch = useDispatch()

    const movies = useSelector(state => state.movies)
    const { userInfo } = useSelector(state => state.userLogin)

    const addMovie = (e) => {
        e.preventDefault()
        dispatch(getMovieDetails(userInfo.token, apiKey, movieId))
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
            margin: "20px auto" }}
        >
            {
                condb ? <PageLinksComponent /> : <MobileNavbarComponent />
            }
            <h1 style = {{ 
                textAlign: 'center',
                fontSize: conds ? '' : '2.0rem'  
                }} >Plan to Watch Movies</h1>
                
            
            <form onSubmit = {addMovie} >
                <h6 
                    className = {condb ? 'row' : 'row ml-1' }
                >Add a New Entry</h6>
                <div className='form-group row'>
                    <input 
                        type='text'
                        value = {apiKey}
                        placeholder = 'Enter Your API Key'
                        onChange = { (e) => setApiKey(e.target.value) }
                        className={
                            `form-control col-md-3 col-sm-5 col-7 ${ condb ? '' : conds ? 'ml-1' : 'ml-2' }`
                        } 
                        style = {{backgroundColor: 'rgb(14, 22, 29)', color: 'white'}}
                    />
                    <div className='col-md-1 col-sm-0'></div>
                    <input 
                        type='text'
                        value = {movieId}
                        placeholder = 'Enter Movie Id'
                        onChange = { (e) => setMovieId(e.target.value) }
                        className={
                            `form-control col-md-3 col-sm-5 col-7 ${ condb ? '' : conds ? 'ml-1' : 'ml-2' }`
                        }  
                        style = {{backgroundColor: 'rgb(14, 22, 29)', color: 'white'}}
                    />
                    <button 
                        type = 'submit' 
                        className = {
                            `btn btn-outline-primary col-md-1 col-sm-4 col-5 
                            ${condb ? 'ml-5' : conds ? '' : 'ml-2'}`
                        }
                        
                        style = {{display: condb ? 'inline' : 'block'}}
                    > Add</button>
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
                        metascore: movie.Metascore,
                        movieId: movie.imdbID
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
            API Used : <a href = "http://www.omdbapi.com/" target = "_blank" rel="noreferrer">OMDb API</a>
        </footer>

        </div>
        </>
    )
}

export default MoviesScreen
