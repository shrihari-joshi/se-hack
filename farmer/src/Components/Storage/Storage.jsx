import React from 'react'
import Sell from '../sellPage/sell'
import Navbar from '../Navbar/Navbar'
import Maps from './Maps'
import axios from 'axios'
import { useState } from 'react'
import FoodStorage from './FoodStorage'

const Storage = () => {
    const [foodStorages, setFoodStorages] = useState([])
    const [location, setLocation] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:3500/getstorage', {
                params: {
                    cityName: location
                }
            });
            console.log('We got information');
            setFoodStorages(response.data.data);
            setIsLoading(false); 
        } catch (err) {
            console.log(err.message);
            setIsLoading(false); 
        }
    };
    
    return (
        <div>   
            <input type="text" id='location' onChange={(e) => setLocation(e.target.value)}/>
            <button type='submit' onClick={handleSubmit}>Get food storages</button>
            {isLoading && 
                <h3>Loading...</h3>
            }
            {
                foodStorages && 
                    foodStorages.map((foodStorage, index) => (
                        <FoodStorage
                            key={index}
                            foodStorage={foodStorage}
                        />
                    ))
            }

        </div>
    )
}

export default Storage