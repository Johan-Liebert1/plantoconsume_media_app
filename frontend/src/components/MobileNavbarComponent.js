import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogout } from '../actions/userActions'
import { withRouter } from 'react-router'

import '../styles/Navbar.css'

const MobileNavbarComponent = ({ history }) => {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(userLogout())
        history.push('/')
    }

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
                <button className = 'btn btn-sm btn-outline-danger' onClick = {logoutHandler}>
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default withRouter(MobileNavbarComponent)
