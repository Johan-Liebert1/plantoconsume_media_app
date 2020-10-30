import mongoose from 'mongoose'

const animeSchema = mongoose.Schema({})

const Anime = mongoose.model('Anime', animeSchema)

export default Anime