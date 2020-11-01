import express from 'express'
import asyncHandler from 'express-async-handler'
import List from '../models/listModel.js'
import protect from '../auth/authMiddleware.js'

const mangaRouter = express.Router()

mangaRouter.get('/manga', protect, asyncHandler( async (req, res) => {
    const list = await List.findOne({ user: req.user._id })

    if (!list) {
        res.status(404)
        res.json("No list found")
    }

    else {
        res.status(200)
        res.json(list.manga)
    }

}))


mangaRouter.post('/manga', protect, asyncHandler( async (req, res) => {
    const data = req.body
    const user = req.user

    const list = await List.findOne({ user: user._id })

    if ( !list ){
        const newList = await List.create({
            user: user._id
        })

        const addedManga = await newList.manga.push(data)

        newList.save()

        if (addedManga) {
            res.status(201)
            res.json(addedManga)
        }

        else {
            res.json({
                "Error": "Error",
                "message": "Could not be created"
            })
        }
    }
    
    else {
        const addedManga = await list.manga.push(data)

        const savedList = await list.save()

        if (savedList) {
            res.status(200)
            res.json(addedManga)
        }
    }
}))


mangaRouter.delete('/manga/:mal_id', protect, asyncHandler(async (req, res) => {
    const list = await List.findOne({ user: req.user._id })

    if (!list) {
        res.status(404)
        res.json({ "message": "No List Found" })
    }


    else {

        await List.findOneAndUpdate( { user: req.user._id }, {
            "$pull" : { "manga" : { "mal_id": Number(req.params.mal_id) } }
            },
        )
        
        res.status(200)
        res.json({ "message": "Deleted" })

    }
}))


export default mangaRouter
