const Review = require('../models/Review')
const User = require('../models/User')
const Farmer = require('../models/Farmer')
const Product = require('../models/Product')
const axios = require('axios')

exports.postReview = async (req, res) => {
    const { productName, username, review, rating } = req.body;

    try {
        const product = await Product.findOne({ productName });
        const user = await User.findOne({ username });

        const newReview = await Review.create({
            productId: product._id,
            userId: user._id,
            review: review, // Assuming review is a string
            rating: rating
        });

        res.json(newReview);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.getReviewsByProduct = async (req, res) => {
    const { productName } = req.body;
    try {
        const product = await Product.findOne({ productName });
        if (!product) {
            return 'No product registered'
        }
        const review = await Review.findOne({ productId: product._id });
        if (!review) {
            return 'No review for this product'
        }
        const reviews = review.review;
        const ratings = review.rating;
        const user = await User.findOne({ '_id': review.userId });

        res.status(200).json({ reviews, ratings, username: user.username });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

