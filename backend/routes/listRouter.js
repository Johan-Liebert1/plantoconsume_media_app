import express from 'express'
import asyncHandler from 'express-async-handler'
import List from '../models/listModel.js'
import protect from '../auth/authMiddleware.js'


const listRouter = express.Router()

listRouter.get('/lists', protect, asyncHandler ( async (req, res) => {
    const user = req.user

    const list = await List.findOne({ user: user._id })

    res.json(list)

}))


export default listRouter