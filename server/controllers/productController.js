const Address = require('../models/Address');
const Farmer = require('../models/Farmer'); 
const Product = require('../models/Product'); 
const User = require('../models/User'); 

exports.addProduct = async (req, res) => {
    const { farmername, dateOfHarvest,dateOfExpiry, price, offers, discountPrice, quantity, couponOffer, category, bundles, deals, imageUrl, productName, description, isRecommended, certifications } = req.body;

    try {
        const farmer = await Farmer.findOne({ farmername });

        if (!farmer) {
            return res.status(404).json({ error: 'Farmer not found' });
        }

        const newProduct = await Product.create({
            farmerId: farmer._id, 
            dateOfHarvest: dateOfHarvest, 
            dateOfExpiry : dateOfExpiry,
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
        console.log('product registered');
        res.status(201).json({ success: true, product: newProduct });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getProducts = async (req, res) => {
    const { category } = req.query
    try {
        const products = await Product.find({ category })
        const productItems = products.map((productItem, index) => {
            productItem.discountPrice = parseInt
        })
        res.status(200).json(products)
    } catch (err) {
        console.log((err.message));
        res.status(500).json({message : 'Internal server error'})
    }
}

exports.getProductsByFarmer = async (req, res) => {
    const { farmername } = req.query
    try {
        const farmer = await Farmer.findOne({ farmername })
        const address = await Address.findOne({ _id: farmer.address._id });

        const farmerDetails = {
            farmer,address
        }
        res.status(200).json({ farmerDetails })
    } catch (err) {
        console.log(err.message);
        res.status(500).json( { message : 'Internal server error'})
    }
}