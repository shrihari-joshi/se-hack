const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://maps-data.p.rapidapi.com/searchmaps.php',
    params: {
        query: 'food storage godowns',
        limit: '20',
        country: 'us',
        lang: 'en',
        lat: '19.07283000',
        lng: '72.88261000',
        offset: '0',
        zoom: '13'
    },
    headers: {
        'X-RapidAPI-Key': '8ed3523de8msh5f76f1ade5225e1p198c7cjsn8114ff608262',
        'X-RapidAPI-Host': 'maps-data.p.rapidapi.com'
    }
};

exports.getStorages = async (req, res) => {
    const location = req.query.location
    try {
        // const weatherData = await axios.get('http://localhost:3500/weather-forecast')
        const response = await axios.request(options);
        console.log('Data about food storage fetched');
        
        res.status(200).json(response.data)
    } catch (error) {
        console.error(error);
    }
}
