const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.post('/addproduct', productController.addProduct)
router.get('/getallproducts', productController.getProducts)

module.exports = router