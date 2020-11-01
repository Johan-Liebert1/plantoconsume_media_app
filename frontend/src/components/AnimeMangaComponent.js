import React from 'react'
import { deleteAnimeDetails, deleteMangaDetails } from '../actions/animeMangaActions'

import {useDispatch, useSelector} from 'react-redux'

import '../styles/MediaDetails.css'
// { airing, duration, episodes, genres, airDate, image, title }
const AnimeMangaComponent = ( { arr, what } ) => {

    // if what == manga, then duration = volumes

    const { 
        airing, 
        duration, 
        episodes,
        genres, 
        airDate, 
        image, 
        title, 
        type, 
        href,
        rating,
        source, 
        score,
        mal_id } = arr
    
    const isAiring = airing ? 'True' : 'False'

    let genreString = ''

    for (let i = 0; i < genres.length - 1; i++ ) {
        genreString += genres[i] + ', '
    }

    genreString += genres[genres.length - 1]

    const new_title = title.length > 33 ? `${title.slice(0, 31)}...` : title
    const align_left = title.length > 33

    const dispatch = useDispatch()

    const { userInfo } = useSelector(state => state.userLogin)

    const deleteHandler = () => {
        // dispatch delete action depending upon 'what' prop

        if ( what === 'anime' ) {
            dispatch(deleteAnimeDetails(userInfo.token, mal_id))
        }

        else {
            dispatch(deleteMangaDetails(userInfo.token, mal_id))
        }
    }

    return (
        <div id = 'list-item'>

            <button 
                id = "delete-btn" 
                className='btn btn-outline-danger btn-sm'
                onClick = { deleteHandler }
            >Delete</button>

            <div id = 'image'>
                <img src = { image } alt = { `${title}` } />
            </div>

            <div id = 'info' >
                <div id = 'title' style ={{
                    display: 'flex', alignSelf: align_left ? 'flex-start' : ''
                    }}
                >
                    <a href = {href} target='_blank' rel="noreferrer"> 
                        <h5 style = {{ display : 'inline' }}>
                            { new_title }
                        </h5>
                        { what === 'anime' && <h5 style = {{display : 'inline'}}> ( {type} )</h5> }
                        
                    </a>
                </div>

                <div className = 'section-container'>

                    <div className = 'section1'>

                        <div>
                            <div className='attr'>
                                <strong>
                                    {what === 'anime' ? 'Episodes: ' : "Chapters: "} 
                                </strong>
                            </div>
                            <div className='value'>{ episodes }</div>
                        </div>

                        <div>
                            <div className='attr'>
                                <strong>
                                    {what === 'anime' ? 'Airing:' : 'Publishing:'} 
                                </strong>
                            </div>
                            <div className='value'>{ isAiring }</div>
                        </div>

                        <div>
                            <div className='attr'>
                                <strong>
                                    {what === 'anime' ? 'Air Date:' : 'Publish Date:'}
                                </strong>
                            </div>
                            <div className='value'>{ airDate }</div>
                        </div>

                        {what === 'anime' &&
                        <div>
                            <div className='attr'>
                                <strong>
                                    Rating: 
                                </strong>
                            </div>
                            <div className='value'>{ rating }</div>
                        </div>
                        }
                        
                    </div> 

                    <div className='section2'>
                        
                        <div>
                            <div className='attr'><strong>MAL Score: </strong></div>
                            <div className='value'>{ score }</div>
                        </div>

                        <div>
                            <div className='attr'><strong>Genre: </strong></div>
                            <div className='value'>{ genreString }</div>
                        </div>

                        <div>
                            <div className='attr'>
                                <strong>
                                    {what === 'anime' ? 'Duration:' : 'Volumes:'} 
                                </strong>
                            </div>
                            <div className='value'>{ duration }</div>
                        </div>

                        { what === 'anime' && 
                        <div>
                            <div className='attr'><strong>Source: </strong></div>
                            <div className='value'>{ source }</div>
                        </div>
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AnimeMangaComponent
