const Review = require('../models/Review')
const User = require('../models/User')
const Farmer = require('../models/Farmer')
const Product = require('../models/Product')
const axios = require('axios')

exports.postReview = async (req, res) => {
    const {farmername , productName, category, username, review, rating } = req.body

    try {
        const product = await Product.findOne({ productName, category})
        const user = await User.findOne({ username})
        const farmer = await Farmer.findOne({ farmername})

        const newReview = await Review.create({
            productId : product._id,
            userId : user._id,
            farmer : farmer._id,
            review : review.push({review}),
            rating : rating
        })
        res.json(newReview)
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}

exports.getReviewsByProduct = async (req, res) => {
    const { productName, category } = req.body
    try {
        const product =  await Product.findOne({ productName, category })
        const review = await Review.findOne({ productId : product._id})
        const reviews = review.reviews
        const rating = review.ratings

        res.json(200).json(reviews, rating)

    }catch(err) {
        console.log(err.message);
        res.status(500).json({ message : 'Intenal server error'})
    }
}
