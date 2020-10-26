import React from 'react'

import '../styles/MediaDetails.css'
// { airing, duration, episodes, genres, airDate, image, title }
const MediaDetails = ( { arr } ) => {

    const { airing, duration, episodes, genres, airDate, image, title } = arr

    let string = ''

    for (let i = 0; i < genres.length - 1; i++ ) {
        string += genres[i] + ', '
    }

    string += genres[genres.length - 1]

    return (
        <div id = 'list-item'>

            <div id = 'image' style={{'border': '1px solid white'}}>
                <span>{ image }</span>
            </div>

            <div className = 'section'>
                <div>
                    <span><strong>Name : </strong>{title}</span>
                </div>
                <div>
                    <span><strong>Episodes : </strong>{episodes}</span>
                </div>
                <div>
                    <span><strong>Duration : </strong>{duration}</span>
                </div>
            </div> 

            <div className='section'>
                <div>
                    <span><strong>Genres : </strong>{string}</span>
                </div>
            </div>

        </div>
    )
}

export default MediaDetails
