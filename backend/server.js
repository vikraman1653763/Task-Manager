const connectDB = require('./config/db');
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

const authRoutes = require("./routes/authRoutes")

// middleware for cors 

app.use(cors({
    origin: process.env.CLIENT_URL || "*" ,
    methods:["GET","POST","PUT","DELETE"] ,
    allowedHeaders:["Content-Type",'Authorization']
}))

// Connection

connectDB()

// Middleware to convert json 

app.use(express.json())


// Routes 

app.use('/api/auth', authRoutes)
// app.use('/api/report', reportRoutes)
// app.use('/api/task', taskRoutes)
// app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{console.log(`app is running on ${PORT}`)})