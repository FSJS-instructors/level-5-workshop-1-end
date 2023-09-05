// 6KMGF5dCoyh8BMAG   mongodb+srv://jordanburger:<password>@cluster0.qbp8qon.mongodb.net/

// dependencies
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// middleware

app.use(express.json())

app.use(morgan('dev'))

mongoose.set('strictQuery', true)

mongoose.connect('mongodb+srv://jordanburger:6KMGF5dCoyh8BMAG@cluster0.qbp8qon.mongodb.net/', (err) => {
    console.log('connected to the db', err)
})

app.use('/api/posts', require('./routes/postRouter'))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7500, () => {
    console.log('Server is running on port 7500')
})