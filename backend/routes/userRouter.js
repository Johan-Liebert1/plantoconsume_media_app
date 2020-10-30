import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../auth/generateToken.js'


const userRouter = express.Router()

userRouter.post('/register', asyncHandler( async (req, res) => {
    // get the username and password from the body, hash the password, then save it to user model

    const { username , password } = req.body

    const userExists = await User.findOne({ username })

    if ( userExists ) {
        res.status(400) // bad request
        throw new Error("User with that username already exists")
    }


    // password is hashed pre-save. 
    // check userModel.js for more details

    const newUser = await User.create({ username, password })

    if (newUser) {
        const token = generateToken(newUser._id)
        res.status(201)
        res.json({
            username: newUser.username,
            token
        })
    }
}))

userRouter.post('/login', asyncHandler( async (req, res) => {

    const { username, password } = req.body

    const user = await User.findOne({ username })

    if ( user && await user.matchPassword(password) ) {
        res.json({
            username,
            token: generateToken(user._id)
        })
    }

    else if (!user) {
        res.status(401)
        throw new Error('No user with that username exists')
    }

    else {
        res.status(401)
        throw new Error("Username or password is incorrect")
    }

}))

export default userRouter