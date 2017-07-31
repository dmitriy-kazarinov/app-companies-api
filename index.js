const express = require('express')
const bodyParser = require('body-parser')
const companies = require('./routes/companies')
const users = require('./routes/users')
const mongoose = require('mongoose')

const app = express()

const HOSTNAME = process.env.HOSTNAME || '0.0.0.0'
const PORT = process.env.PORT || 4000

mongoose.connect('mongodb://localhost/companydb', { useMongoClient: true })
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/api', companies)
app.use('/users', users)

app.use((err, req, res, next) => {
  res.status(422).send({
    error: err.message
  })
})

app.listen(PORT, HOSTNAME, (err) => {
  let url = `http://${HOSTNAME}`

  if (err) {
    return console.error(err)
  }

  if (PORT !== 80) {
    url = url + `:${PORT}`
  }

  console.info(`==> 🌎  Running server. Open up ${url} in your browser.`)
})
