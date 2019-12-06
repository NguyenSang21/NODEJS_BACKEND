/**
 * Created by sang.nguyen on 06/12/2019
 */

// Set app environment
require('./config/.env')
// Set other app paths
require('./global-paths')
// Set config variables
global.CONFIG = require(`./config/${process.app_env}`)

const express = require('express')
const app = express()
const cors = require('cors')
// import route path
const routes = require(global.APP_ROUTE_PATH)

app.use(cors())
// define routes list
app.use('/api', routes)

// default route
app.use('/', (req, res) => {
  res.statusCode = 200 // send the appropriate status code
  res.json({ status: 'success', message: 'WELCOME TO BACKEND' })
})

module.exports = app