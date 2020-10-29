import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/PageLinks.css'

const PageLinksComponent = () => {
    return (
        <div id = 'label-container'>

            <Link to = '/anime' className = 'label'>
                Anime
            </Link>
            
            <Link to = '/manga' className = 'label'>
                Manga
            </Link>

            <Link to = '/movies' className = 'label'>
                Movies
            </Link>

        </div>
    )
}

export default PageLinksComponent
