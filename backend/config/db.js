import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI 

        const conn = await mongoose.connect(uri , {
            useUnifiedTopology : true,
            useNewUrlParser : true,
            useCreateIndex : true,
            useFindAndModify: false
        })

        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`)
        process.exit(1)
    }
}

export default connectDB