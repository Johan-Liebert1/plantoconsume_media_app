import React from 'react'

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
        score } = arr
    
    const isAiring = airing ? 'True' : 'False'

    let genreString = ''

    for (let i = 0; i < genres.length - 1; i++ ) {
        genreString += genres[i] + ', '
    }

    genreString += genres[genres.length - 1]

    const wholeTitle = `${title} ( ${type} )`


    return (
        <div id = 'list-item'>
            <div id = 'image'>
                <img src = { image } alt = { `${title}-image` } />
            </div>

            <div id = 'info' >
                <div id = 'title' style ={{display: 'flex'}}>
                    <a href = {href} target='_blank'> 
                        <h5 style = {{ display : 'inline' }}>
                            { title }
                        </h5>
                        { what === 'anime' && <h5 style = {{display : 'inline'}}> ( {type} )</h5> }
                        
                    </a>
                </div>

                <div className = 'section-container'>

                    <div className = 'section1'>

                        <div>
                            <div className='attr'>
                                <strong>
                                    {what === 'anime' ? 'Episodes:' : "Chapters:"} 
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
