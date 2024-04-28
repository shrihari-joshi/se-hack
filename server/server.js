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
const credentials = require('./middlewares/credentials');
const dbConn = require('./config/dbConn');

dbConn()

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/images', express.static('upload/images'));
app.use('/pdfs', express.static('upload/pdfs'));

app.use('/', require('./routes/register'))
app.use('/', require('./routes/login'))
app.use('/', require('./routes/uploads'))
app.use('/', require('./routes/product'))
app.use('/', require('./routes/gemini'))
app.use('/', require('./routes/user'))
app.use('/', require('./routes/map'))
app.use('/', require('./routes/weather'))
app.use('/', require('./routes/review'))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
