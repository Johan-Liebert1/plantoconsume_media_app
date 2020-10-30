import axios from 'axios'

export const userLogin = (username, password) => async (dispatch) => {
    try {
        dispatch({ type : "USER_LOGIN_REQUEST" })

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post('/login', 
                                            {username, password}, 
                                            config)

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data
        })
    }

    catch (error) {
        dispatch({
            type: "USER_LOGIN_FAIL",
            payload: error
        })
    }
}


export const userRegister = (username, password) => async (dispatch) => {
    try {
        dispatch({ type : "USER_REGISTER_REQUEST" })

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post('/register', 
                                            {username, password}, 
                                            config)


        dispatch({
            type: 'USER_REGISTER_SUCCESS',
            payload: data
        })

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data
        })
        
    }

    catch (error) {
        dispatch({
            type: "USER_REGISTER_FAIL",
            payload: error
        })
    }
}