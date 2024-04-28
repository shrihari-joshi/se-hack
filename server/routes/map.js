const express = require('express')
const router = express.Router()
const mapServices = require('../services/mapService')

router.get('/getstorage', mapServices.getStorages)

module.exports = router