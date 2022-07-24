const express = require('express')
const morgan = require('morgan')

const server = express()

require('./database/database')

// Middlewares
server.use(morgan('dev'))
server.use(express.json())

// routes
server.use(require('./router/router'))

module.exports = server