const { config } = require('dotenv')

config({path: ".env"})

const { DB_USER ,DB_PASSWORD, DB_URI} = process.env

module.exports = { DB_USER ,DB_PASSWORD, DB_URI}
