const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type : String,
        required: true
    },
    farmername: {
        type: String,
        required: true,
        unique: true
    },
    aadharNumber: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Address'
    }
});

const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;
