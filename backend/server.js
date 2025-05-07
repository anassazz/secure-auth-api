import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

const PORT = 3000


app.listen(PORT,()=>{
    console.log(` 🚀 Server is Running in http://localhost:${PORT}`)
})
