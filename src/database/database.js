const mongoose = require('mongoose')

const keys = require('../config/keys')

mongoose.connect(`mongodb+srv://${keys.DB_USER}:${keys.DB_PASSWORD}@${keys.DB_URI}/?retryWrites=true&w=majority`, {
	dbName: "agua_potable_magallanes"
}).then(()=>{
	console.log("DB connect")
}).catch((err)=>{
	console.log(err)
})

module.exports = mongoose