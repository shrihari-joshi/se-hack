const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer',
        required: true
    },
    dateOfHarvest: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    offers: {
        type: Number,
        default: 0,
        min: 0
    },
    discountPrice: {
        type: Number,
        min: 0
    },
    quantity: {
        type: Number,
        min: 1,
        default: 1
    },
    couponOffer: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        enum: ['milk_product', 'vegetable', 'fruit', 'poultry'],
        required: true
    },
    bundles: {
        type: Number,
        default: 0,
        min: 0
    },
    deals: {
        type: Number,
        default: 0,
        min: 0
    },
    imageUrl: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    certifications: {
        type: [String] // Array of certification names
    },
    isRecommended: {
        type: Boolean,
        default: false
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
