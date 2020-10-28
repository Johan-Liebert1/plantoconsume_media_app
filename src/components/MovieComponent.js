import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteMovieDetails } from '../actions/moviesActions'

import '../styles/MediaDetails.css'

const MovieComponent = ( { arr } ) => {

    const { 
        duration, 
        genres, 
        airDate, 
        image, 
        title, 
        type, 
        href, 
        score,
        country,
        metascore,
        movieId } = arr

    const dispatch = useDispatch()
    
    const deleteHandler = (e) => {
        e.preventDefault()
        dispatch( deleteMovieDetails(movieId) )
    } 

    return (
        <div id = 'list-item'>

            <button 
                id = "delete-btn" 
                className='btn btn-outline-danger btn-sm'
                onClick = { deleteHandler }
            >Delete</button>

            <div id = 'image'>
                <img src = { image } alt = { `${title}-image` } />
            </div>

            <div id = 'info' >
                <div id = 'title'>
                    <a href = {href} target='_blank'> 
                        <h5 style = {{ display : 'inline' }}>{ title }</h5>
                    </a>
                </div>

                <div className = 'section-container'>

                    <div className = 'section1'>

                        <div>
                            <div className='attr'>
                                <strong>
                                    Duration
                                </strong>
                            </div>
                            <div className='value'>{ duration }</div>
                        </div>

                        <div>
                            <div className='attr'>
                                <strong>
                                    IMDBRating
                                </strong>
                            </div>
                            <div className='value'>{ score }</div>
                        </div>

                        <div>
                            <div className='attr'>
                                <strong>
                                    Release Date:
                                </strong>
                            </div>
                            <div className='value'>{ airDate }</div>
                        </div>
                        
                    </div> 

                    <div className='section2'>
                        <div>
                            <div className='attr'><strong>Genre: </strong></div>
                            <div className='value'>{ genres }</div>
                        </div>

                        <div>
                            <div className='attr'><strong>Country: </strong></div>
                            <div className='value'> { country } </div>
                        </div>

                        <div>
                            <div className='attr'>
                                <strong>
                                    MetaScore
                                </strong>
                            </div>
                            <div className='value'> { metascore } </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieComponent
