const Farmer = require('../models/Farmer'); 
const Product = require('../models/Product'); 
const User = require('../models/User'); 

exports.addProduct = async (req, res) => {
    const { username, date, price, offers, discountPrice, quantity, couponOffer, category, bundles, deals, imageUrl, productName, description, isRecommended, certifications } = req.body;

    try {
        const farmer = await Farmer.findOne({ username });

        if (!farmer) {
            return res.status(404).json({ error: 'Farmer not found' });
        }

        const newProduct = await Product.create({
            farmerId: farmer._id, 
            dateOfHarvest: new Date(date), 
            price,
            offers,
            discountPrice,
            quantity,
            couponOffer,
            category,
            bundles,
            deals,
            imageUrl,
            productName,
            description,
            isRecommended,
            certifications: certifications 
        });

        res.status(201).json({ success: true, product: newProduct });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getProducts = async (req, res) => {
    const { username } = req.query
    try {
        const user = await User.findOne({ username })
        if (!user) {
            return 'User not registered'
        }
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        console.log((err.message));
        res.status(500).json({message : 'Internal server error'})
    }
}

// exports.productSold = async (req, res) => {

// }