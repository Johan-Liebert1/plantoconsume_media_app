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
        score } = arr
    
    const isAiring = airing ? 'True' : 'False'

    let genreString = ''

    for (let i = 0; i < genres.length - 1; i++ ) {
        genreString += genres[i] + ', '
    }

    genreString += genres[genres.length - 1]

    return (
        <div id = 'list-item'>
            <div id = 'image'>
                <img src = { image } alt = { `${title}-image` } />
            </div>

            <div id = 'info' >
                <div id = 'title'>
                    <a href = {href} target='_blank'> 
                        <h2 style = {{ display : 'inline' }}>{ title }</h2>
                        { what === 'anime' && <h2 style = {{display : 'inline'}}> ( {type} )</h2> } 
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

                        <div>
                            <div className='attr'>
                                <strong>
                                    Rating: 
                                </strong>
                            </div>
                            <div className='value'>{ rating }</div>
                        </div>
                        
                    </div> 

                    <div className='section2'>
                        <div>
                            <div className='attr'><strong>Genre: </strong></div>
                            <div className='value'>{ genreString }</div>
                        </div>

                        <div>
                            <div className='attr'><strong>MAL Score: </strong></div>
                            <div className='value'>{ score }</div>
                        </div>

                        <div>
                            <div className='attr'>
                                <strong>
                                    {what === 'anime' ? 'Duration:' : 'Volumes:'} 
                                </strong>
                            </div>
                            <div className='value'>{ duration }</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AnimeMangaComponent
