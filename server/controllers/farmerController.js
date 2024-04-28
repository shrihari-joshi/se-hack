const Farmer = require('../models/Farmer')
const Address = require('../models/Address')

exports.getFarmer = async (req, res) => {
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