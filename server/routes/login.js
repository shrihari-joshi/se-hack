const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')

router.post('/farmer/login', loginController.loginFarmer)
router.get('/user/login', loginController.loginUser)

module.exports = router