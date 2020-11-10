import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Navbar.css'

const MobileNavbarComponent = () => {
    return (
        <nav>
            <Link to = '/anime'>
                <h6>
                    Anime
                </h6>
            </Link>

            <Link to = '/manga'>
                <h6>
                    Manga
                </h6>
            </Link>

            <Link to = '/movies'>
                <h6>
                    Movies
                </h6>
            </Link>

            <div id = 'logout'>
                <button className = 'btn btn-sm btn-outline-danger' >
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default MobileNavbarComponent
