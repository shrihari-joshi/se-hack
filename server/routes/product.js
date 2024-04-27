const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.post('/farmer/login', productController.registerFarmer)
router.post('/user/login', productController.registerUser)

module.exports = router