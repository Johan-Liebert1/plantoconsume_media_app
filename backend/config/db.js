import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI)
        const conn = await mongoose.connect('mongodb+srv://dude:dude@emazon.7wcq7.mongodb.net/plantowatch?retryWrites=true&w=majority', {
            useUnifiedTopology : true,
            useNewUrlParser : true,
            useCreateIndex : true
        })

        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`)
        process.exit(1)
    }
}

export default connectDB