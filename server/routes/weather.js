const express = require('express')
const router = express.Router()
const weatherResponse = require('../services/weatherService')

router.use('/weather-forecast', weatherResponse.weatherRespone)

module.exports = router