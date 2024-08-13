require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/useRoutes')
const app = express()

const PORT = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGODB_URI)
.then( (res) => {
    console.log(`Port ${`http://localhost/${PORT}`} connected to database ${process.env.MONGODB_URI}`)
})
.catch( (err) => {
    console.log(`An error occured ${err}`)
})

app.use(routes)

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`)
})