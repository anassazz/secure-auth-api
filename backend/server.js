import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import authRoutes from './routes/authRoutes.js'

const app = express()

const PORT = 3000

app.use('/',authRoutes)





app.listen(PORT,()=>{
    console.log(` 🚀 Server is Running in http://localhost:${PORT}`)
})
