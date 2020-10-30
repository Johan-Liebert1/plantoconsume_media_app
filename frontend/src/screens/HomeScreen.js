import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { userLogin,  userRegister } from '../actions/userActions'

const HomeScreen = ({ history }) => {

    const [login, setLogin] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        // check if login is true or not
        if (login) {
            dispatch(userLogin(username, password))
        }

        else {
            dispatch(userRegister(username, password))
        }

        history.push('/anime')
    }

    return (
        <div className='container' style = {{height: '100vh'}}>
            <div style = {{
                display : 'flex', 
                flexDirection: 'column', 
                justifyContent: "center", 
                alignItems:'center',
                height: '100%'
            }}>
                <h1> { login ? "Login" : "Sign Up" } </h1>

                <form 
                    className = 'mt-5 mb-5' 
                    style={{width: '40%'}}
                    onSubmit = {submitHandler}
                >
                    <div className='form-group'>
                        <label htmlFor = 'username'>Username</label>
                        <input
                            type = 'text'
                            className='form-control'
                            value = {username}
                            onChange = { (e) => setUsername(e.target.value) }
                            id = 'username'
                            style = {{backgroundColor: 'transparent', color: 'white'}}
                            
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor = 'password'>Password</label>
                        <input
                            type = 'password'
                            className='form-control'
                            value = {password}
                            onChange = { (e) => setPassword(e.target.value) }
                            id = 'password'
                            style = {{backgroundColor: 'transparent', color: 'white'}}
                        />
                    </div>

                    <div className = 'form-group'>
                        <button type = 'submit' className = 'btn btn-outline-primary'>
                            { login ? "Login" : "Sign Up" }
                        </button>
                    </div>
                </form>

                { login ? <span>Don't have an account? </span> : <span>Already have an account? </span> } 

                <button 
                    onClick = { () => setLogin(!login) } 
                    className='btn btn-success'
                    style={{fontSize: '0.7rem', display: 'inline'}}
                > 
                    { login ? 'Register Here' : "Go to Login" } 
                </button>
            </div>
        </div>
    )
}

export default HomeScreen
