const Cart = require('../models/Cart')
const Product = require('../models/Product')
const User = require('../models/User')

exports.addToCart = async (req, res) => {
    const { username, productName, category, quantity } = req.body
    try {
        const user = await User.findOne({ username })
        const product = await Product.findOne({productName, category })
        
        let sum = 0;
        const items = items.push({
            productId : product._id,
            quantity : quantity 
        })
        sum += product.price * quantity
        const cart = await Cart.create({
            userId : user._id,
            items : items,
            totalPrice : sum
        })
        console.log(cart);
        res.status(201).json({ message : 'added to cart'})
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}