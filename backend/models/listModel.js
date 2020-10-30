import mongoose from 'mongoose'

const listSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    anime: [],
    manga: [],
    movies: []
    
})

const List = mongoose.model('List', listSchema)

export default List