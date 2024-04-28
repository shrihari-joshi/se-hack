const express = require('express')
const router = express.Router()
const gemeniServer = require('../services/geminiService')

router.post('/farmerresponse', gemeniServer.generateResponse)

module.exports = router;
