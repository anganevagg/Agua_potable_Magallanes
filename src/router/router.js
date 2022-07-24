const { Router } = require("express")
const router = Router()

router.use('/', require('./index.routes'))
router.use('/api/water_socket', require('./water_socket.routes'))

module.exports = router