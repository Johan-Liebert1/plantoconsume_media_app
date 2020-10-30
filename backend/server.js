import express from 'express'
import User from './models/userModel.js'
import List from './models/listModel.js'
import connectDB from './config/db.js'
import asyncHandler from 'express-async-handler'

const app = express()
connectDB()
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ "message" : "You are now connected" })
})

app.post('/register', asyncHandler( async (req, res) => {
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
        res.status(201)
        res.json({
            username: newUser.username,
            password: newUser.password
        })
    }


    
}))

app.post('/anime', asyncHandler( async (req, res) => {
    const data = req.body

    const list = await List.findOne({ user: req.body.user_id })

    if ( !list ){
        const newList = await List.create({
            user: req.body.user_id
        })

        const addedAnime = await newList.anime.push(data)

        if (addedAnime) {
            res.status(201)
            res.json(addedAnime)
        }

        else {
            res.json({
                "Error": "Error",
                "message": "Could not be created"
            })
        }
    }
    

    const addedAnime = await list.anime.push(data)

    const savedList = await list.save()

    if (savedList) {
        res.status(200)
        res.json(addedAnime)
    }
}))

app.listen(5000, 'localhost', () => {
    console.log(`Server listening at port 5000`)
})