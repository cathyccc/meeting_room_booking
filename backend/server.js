require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/users')
const appointmentRoutes = require('./routes/appointments')

const app = express()

// middleware
app.use(express.json())
app.use((req,res,next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/users', userRoutes)
app.use('/api/appointments', appointmentRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests 
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & listening on PORT ${process.env.PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
