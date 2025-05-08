import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import authRoutes from './routes/authRoutes.js'
import e from 'express'

const app = express()

const PORT = process.env.PORT || 5000

//Middleware
app.use(express.json())

app.use('/',authRoutes)

//connecting to MongoDB
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log(' ✅ MongoDB Connected'))
.catch((err)=>console.log("Database not connected",err)) 




app.listen(PORT,()=>{
    console.log(` 🚀 Server is Running in http://localhost:${PORT}`)
})
