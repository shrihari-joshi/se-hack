const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewController')

router.post('/addreview', reviewController.postReview)
router.get('/getreviewbyproduct', reviewController.getReviewsByProduct)

module.exports = router