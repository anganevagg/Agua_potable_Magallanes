const { Router } = require('express')
const WaterSocket = require('../models/water_socket.model')
const router = Router()

router.get('/', async(req, res)=>{
	const waterSockets = await WaterSocket.find()
	res.status(200).json(waterSockets)
})

router.post('/', async(req, res)=>{
	const newWaterSocket = {
		socket_number: req.body.socket_number,
		user_name: {
			name: req.body.name,
			last_name: req.body.last_name
		},
		address: {
			street: req.body.street,
			number: req.body.number | null
		},
		meter_number: req.body.meter_number
	}
	const waterSocket = await WaterSocket.create(newWaterSocket)
	res.json(waterSocket)
})

module.exports = router