const express = require('express')
const router = express.Router()
const farmerController = require('../controllers/farmerController')

router.get('/farmer', farmerController.getFarmer)


module.exports = router