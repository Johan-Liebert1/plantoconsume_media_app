import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../actions/userActions'
import { withRouter } from 'react-router'

const DesktopNavbarComponent = ({ history }) => {
    const { userInfo } = useSelector(state => state.userLogin)
    const dispatch = useDispatch()

    const styles = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '1rem 5rem',
        border: 'none'
    }

    const logoutHandler = () => {
        dispatch(userLogout())
        history.push('/')
    }

    return (
        <nav style = {styles}>
            {
                userInfo ? 
                <div>
                    <span className = 'mr-5'>Welcome, {userInfo.username} </span>
                    <button 
                        className='btn btn-outline-danger btn-sm'
                        onClick = {logoutHandler}
                    >Logout</button>
                </div>
                :
                <Link to = '/'>
                    <button className = 'btn btn-outline-primary btn-sm'>
                        Login
                    </button>
                </Link>
            }
        </nav>
    )
}

export default withRouter(DesktopNavbarComponent)
