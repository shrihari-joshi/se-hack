// VegeItem.js

import React, { useEffect, useState } from 'react';
import axios from 'axios'

const VegeItem = ({ vegetable }) => {
    const [review, setReview] = useState(null)
    const [rating, setRating] = useState(null)
    const [username, setUsername] = useState('')

    const fetchReview = async (productName) => {
        const response = await axios.get('http://localhost:3500/getreviewbyproduct', {
            params : {
                productName : vegetable.productName
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
    <div>
      <h3 className="fruit-name">{vegetable.productName}</h3>
      <p className="fruit-price"><strong>Price:</strong> {vegetable.price}</p>
      <p>Quantity: {vegetable.quantity}</p>
      <p>Offers: {vegetable.offers}</p>
      <p className="fruit-date"><strong>Date of Harvest:</strong> {vegetable.dateOfHarvest}</p>
      {vegetable.offers !== 0 && (
        <p className="fruit-offers"><strong>Offers</strong> {vegetable.offers}</p>
      )}
      <p>Discription : {vegetable.description}</p>
      <div>
                {review &&
                    <p>Review by {username} : {review}</p>
                }
                {rating &&
                    <p>Ratings by {username} : {rating}</p>
                }
            </div>
    </div>
  );
}

export default VegeItem;
