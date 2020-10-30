import express from 'express'
import asyncHandler from 'express-async-handler'
import List from '../models/listModel.js'
import protect from '../auth/authMiddleware.js'


const listRouter = express.Router()

// Anime routes

listRouter.post('/anime', protect, asyncHandler( async (req, res) => {
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

listRouter.get('/anime', protect, asyncHandler( async (req, res) => {

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


// Manga routes

listRouter.post('/manga', protect, asyncHandler( async (req, res) => {
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

listRouter.get('/manga', protect, asyncHandler( async (req, res) => {
    const list = await List.findOne({ user: req.user._id })

    if (!list) {
        res.status(404)
        res.json("no list found")
    }

    res.status(200)
    res.json(list.manga)

}))



// Movie routes

listRouter.post('/movie', protect, asyncHandler( async (req, res) => {
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


listRouter.get('/movies', protect, asyncHandler( async (req, res) => {
    const list = await List.findOne({ user: req.user._id })

    if (!list) {
        res.status(404)
        res.json("no list found")
    }

    res.status(200)
    res.json(list.movies)

}))


listRouter.get('/lists', protect, asyncHandler ( async (req, res) => {
    const user = req.user

    const list = await List.findOne({ user: user._id })

    res.json(list)

}))


export default listRouter