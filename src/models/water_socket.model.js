const { Schema, default: mongoose } = require('mongoose')

const WaterSocket = new Schema({
	socket_number: {
		type: Number,
		required: true,
		unique: true
	},
	user_name: {
		name: {
			type: String,
			required: true
		},
		last_name: {
			type: String,
			required: true
		}
	},
	address:{
		street: {
			type: String,
			required: true
		},
		number:{
			type: Number
		}
	},
	meter_number: {
		type: String,
		unique: true
	}
},
{
	collection: "water_sockets"
})

module.exports = mongoose.model("water_socket", WaterSocket)