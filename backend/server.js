import express from 'express'
import connectDB from './config/db.js'
import listRouter from './routes/listRouter.js'
import userRouter from './routes/userRouter.js'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
const app = express()

connectDB()

app.use(express.json())

app.use(userRouter)
app.use(listRouter)

// this gives the absolute path
const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
}

else {
    app.get("/", (req, res) => {
        res.json({ "message" : "You are now connected" })
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, 'localhost', () => {
    console.log(`Server listening at port ${PORT}`)
})