import React from 'react';
import Sell from '../sellPage/sell';
import Navbar from '../Navbar/Navbar';
import Maps from './Maps';
import axios from 'axios';
import { useState } from 'react';
import FoodStorage from './FoodStorage';
import './Storage.css'; // Import the CSS file 

const Storage = () => {
    const [foodStorages, setFoodStorages] = useState([]);
    const [location, setLocation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
        <div className='storage-body'> 
            <div>
                <Navbar/>    
            </div> 
            <div className='storage-head'>
                <p>Search your nearest food storages here</p>    
            </div>
            <div className='butinput'>
            <input 
                type="text" 
                id="location" 
                className="spj-input" 
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter Location"
                />
            <button 
                type="submit" 
                onClick={handleSubmit} 
                className="spj-button"
                >
                Get Food Storages
            </button>
            </div> 
            {isLoading && 
                <h3 className="spj-loading">Loading...</h3>
            }
            {
                foodStorages && 
                    foodStorages.map((foodStorage, index) => (
                        <FoodStorage
                            key={index}
                            foodStorage={foodStorage}
                            className="spj-storage-item"
                        />
                    ))
            }
        </div>
    );
};

export default Storage;
