const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const app = express();
const Razorpay = require('razorpay')
const PORT = process.env.PORT || 3500;

// importing files
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials');
const dbConn = require('./config/dbConn');

dbConn()

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/images', express.static('upload/images'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
