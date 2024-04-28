import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Rating } from '@mui/material';

const FruitsItem = ({ fruit, addToCart }) => { 
    const [review, setReview] = useState(null)
    const [rating, setRating] = useState(null)
    const [username, setUsername] = useState('')

    const fetchReview = async (productName) => {
        const response = await axios.get('http://localhost:3500/getreviewbyproduct', {
            params : {
                productName : fruit.productName
            }
        })
        setReview(response.data.reviews)
        setRating(response.data.rating)
        setUsername(response.data.username)
    }
    useEffect(() => {
        fetchReview()
    }, [])
    return (
        <div className="fruit-container">
            <h3 className="fruit-name">{fruit.productName}</h3>
            <p className="fruit-price"><strong>Price:</strong> {fruit.price}</p>
            <p>Quantity: {fruit.quantity}</p>
            <p>Offers: {fruit.offers}</p>
            <p className="fruit-date"><strong>Date of Harvest:</strong> {fruit.dateOfHarvest}</p>
            {fruit.offers !== 0 && (
                <p className="fruit-offers"><strong>Offers</strong> {fruit.offers}</p>
            )}
            {/* <p className="fruit-image"><strong>""Idhar Image dalna hai SHREYAA""</strong> {fruit.imageUrl}</p> */}
            <p>Discription : {fruit.description}</p>
            
        </div>
    );
};

export default FruitsItem;