const Farmer = require('../models/Farmer');
const Address = require('../models/Address');
const User = require('../models/User');

exports.registerFarmer = async (req, res) => {
    try {
        const { name, phoneNumber, password, username, aadharNumber, address } = req.body;

        const existingFarmer = await Farmer.findOne({ $or: [{ username }, { aadharNumber }, {phoneNumber}] });
        if (existingFarmer) {
            return res.status(400).json({ message: 'Username or Aadhar number already exists' });
        }

        let newAddress;
        if (address) {
            newAddress = await Address.create(address);
        }

        const newFarmer = await Farmer.create({
            name,
            phoneNumber,
            password,
            username,
            aadharNumber,
            address: newAddress ? newAddress._id : null 
        });

        res.status(201).json(newFarmer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.registerUser = async (req, res) => {
    try {
        const { username, name, password, phoneNumber, address } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ error: 'Username already exists' });
        }

        let newAddress;
        if (address) {
            newAddress = await Address.create(address);
        }

        const newUser = await User.create({
            username,
            name,
            password,
            phoneNumber,
            address: newAddress ? newAddress._id : null 
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

