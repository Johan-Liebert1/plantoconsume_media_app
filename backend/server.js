import express from 'express'
import connectDB from './config/db.js'
import listRouter from './routes/listRouter.js'
import userRouter from './routes/userRouter.js'

const app = express()
connectDB()
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ "message" : "You are now connected" })
})

app.use(userRouter)
app.use(listRouter)



app.listen(5000, 'localhost', () => {
    console.log(`Server listening at port 5000`)
})