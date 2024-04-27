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

exports.clearCart = async (req, res) => {
    const { username } = req.body
    try {
        const user = await User.findOne({ username })
        const cart = await Cart.findOneAndDelete({ userId : user._id})
        res.status(200).json({ message :  `Cart cleared for ${user.username}`})
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}

exports.removeFromCart = async (req, res) => {
    const { username, productName, category} = req.body
    try {
        const user = await User.findOne({ username })
        const cart = await Cart.findOne({ userId : user._id})
        const product = await Product.findOne({ productName : productName})

        const cartItemToRemove = cart.items.find(item => item.productId.equals(product._id));
        user.totalPrice -= cartItemToRemove.price * cartItemToRemove.quantity

        cart.items = cart.items.filter((cartItem) => {
            cartItem._id !== product._id
        })

        await user.save()
        res.status(200).json({ message: 'Product removed from cart successfully', cart });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}