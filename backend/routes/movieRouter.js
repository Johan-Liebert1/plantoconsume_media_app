import express from 'express'
import asyncHandler from 'express-async-handler'
import List from '../models/listModel.js'
import protect from '../auth/authMiddleware.js'

const movieRouter = express.Router()


movieRouter.get('/movies', protect, asyncHandler( async (req, res) => {
    const list = await List.findOne({ user: req.user._id })

    if (!list) {
        res.status(404)
        res.json("no list found")
    }

    res.status(200)
    res.json(list.movies)

}))


movieRouter.post('/movies', protect, asyncHandler( async (req, res) => {
    const data = req.body
    const user = req.user

    const list = await List.findOne({ user: user._id })

    if ( !list ){
        const newList = await List.create({
            user: user._id
        })

        const addedMovie = await newList.movies.push(data)

        newList.save()

        if (addedMovie) {
            res.status(201)
            res.json(addedMovie)
        }

        else {
            res.json({
                "Error": "Error",
                "message": "Could not be created"
            })
        }
    }
    
    else {
        const addedMovie = await list.movies.push(data)

        const savedList = await list.save()

        if (savedList) {
            res.status(200)
            res.json(addedMovie)
        }
    }
}))

movieRouter.delete('/movies/:imdbID', protect, asyncHandler(async (req, res) => {
    const list = await List.findOne({ user: req.user._id })

    if (!list) {
        res.status(404)
        res.json({ "message": "No List Found" })
    }


    else {

        await List.findOneAndUpdate( { user: req.user._id }, {
            "$pull" : { "movies" : { "imdbID": req.params.imdbID } }
            },
        )

        res.json({ "message": "Deleted" })

    }
}))


export default movieRouter
