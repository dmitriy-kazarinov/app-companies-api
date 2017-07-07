const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/api')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/companydb', { useMongoClient: true })
mongoose.Promise = global.Promise

// app.use(express.static('public'))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/api', router)
app.use((err, req, res, next) => {
  res.status(422).send({
    error: err.message
  })
})

app.listen(process.env.port || 4000, () => {
  console.log('Now listening for reqests!')
})
