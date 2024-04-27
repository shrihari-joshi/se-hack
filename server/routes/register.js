const express = require('express')
const router = express.Router()
const registerController = require('../controllers/registerController')

router.post('/farmer/register', registerController.registerFarmer)
router.post('/user/register', registerController.registerUser)

module.exports = router