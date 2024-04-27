const User = require('../models/User')
const Farmer = require('../models/Farmer')

exports.loginFarmer = async (req, res) => {
    const { phoneNumber, farmername , password } = req.query;

    try {
        if (!phoneNumber && !farmername) {
            return res.status(400).json({ error: 'Enter phone number or farmername' });
        }

        let farmer;
        if (phoneNumber) {
            farmer = await Farmer.findOne({ phoneNumber });
        } else {
            farmer = await Farmer.findOne({ farmername });
        }

        if (!farmer) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        if (password !== farmer.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json(farmer);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.loginUser = async (req, res) => {
    const { phoneNumber, username , password } = req.query;

    try {
        if (!phoneNumber && !username) {
            return res.status(400).json({ error: 'Enter phone number or username' });
        }

        let user;
        if (phoneNumber) {
            user = await User.findOne({ phoneNumber });
        } else {
            user = await User.findOne({ username });
        }

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        if (password !== user.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};
