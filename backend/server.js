import express from 'express'
import User from './models/userModel.js'
import connectDB from './config/db.js'
import asyncHandler from 'express-async-handler'

const app = express()
connectDB()
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ "message": "You are now connected" })
})

app.post('/register', asyncHandler( async (req, res) => {
    // get the username and password from the body, hash the password, then save it to user model

    const { username , password } = req.body

    const userExists = await User.findOne({ username })

    if (userExists) {
        res.status(400) // bad request
        throw new Error("User with that username already exists")
    }


    // password is hashed pre-save. 
    // check userModel.js for more details
    const newUser = await User.create({ username, password })

    if (newUser) {
        res.status(201)
        res.json({
            username: newUser.username,
            password: newUser.password
        })
    }

}))

app.listen(5000, 'localhost', () => {
    console.log(`Server listening at port 5000`)
})