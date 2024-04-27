import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Maps = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

const options = {
  method: 'GET',
  url: 'https://maps-data.p.rapidapi.com/nearby.php',
  params: {
    query: 'food storage godown',
    lat: '19.07283',
    lng: '72.88261',
    limit: '20',
    country: 'us',
    lang: 'en',
    offset: '0',
    zoom: '12'
  },
  headers: {
    'X-RapidAPI-Key': '84649a33bemsh89067bd4af0ca65p1ab404jsnb6641d742154',
    'X-RapidAPI-Host': 'maps-data.p.rapidapi.com'
  }
};

try {
    const response = await axios.request(options);
    const restaurantNames = response.data.results.map(restaurant => restaurant.name);
    console.log(restaurantNames); 
    setRestaurants(response.data.results);
} catch (error) {
    console.error(error);
}
        };
    
        fetchData();
    }, []);
    

    return (
        <div>
            <h1>Storages Nearby</h1>
            <ul>
                {restaurants.map((restaurant, index) => (
                    <li key={index}>{restaurant.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Maps;
