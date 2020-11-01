import express from 'express'
import asyncHandler from 'express-async-handler'
import List from '../models/listModel.js'
import protect from '../auth/authMiddleware.js'

const animeRouter = express.Router()


animeRouter.get('/anime', protect, asyncHandler( async (req, res) => {

    const list = await List.findOne({ user: req.user._id })

    if (!list) {
        res.status(404)
        res.json("no list found")
    }

    else {
        res.status(200)
        res.json(list.anime)
    }

}))


animeRouter.post('/anime', protect, asyncHandler( async (req, res) => {
    const data = req.body
    const user = req.user

    const list = await List.findOne({ user: user._id })

    if ( !list ){
        const newList = await List.create({
            user: user._id
        })

        const addedAnime = await newList.anime.push(data)

        newList.save()

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
    
    else {
        const addedAnime = await list.anime.push(data)

        const savedList = await list.save()

        if (savedList) {
            res.status(200)
            res.json(addedAnime)
        }
    }
}))


animeRouter.delete('/anime/:mal_id', protect, asyncHandler(async (req, res) => {
    const list = await List.findOne({ user: req.user._id })

    if (!list) {
        res.status(404)
        res.json({ "message": "No List Found" })
    }


    else {

        await List.findOneAndUpdate( { user: req.user._id }, {
            "$pull" : { "anime" : { "mal_id": Number(req.params.mal_id) } }
            },
        )

        res.json({ "message": "Deleted" })

    }
}))


export default animeRouter