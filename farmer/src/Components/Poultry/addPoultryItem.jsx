import React, { useEffect, useState } from 'react';
import axios from 'axios'


const AddPoultryItem = ({poultry}) => {
    const [review, setReview] = useState(null)
    const [rating, setRating] = useState(null)
    const [username, setUsername] = useState('')

    const fetchReview = async (productName) => {
        const response = await axios.get('http://localhost:3500/getreviewbyproduct', {
            params : {
                productName : poultry.productName
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
            <h3 className="fruit-name">{poultry.productName}</h3>
            <p className="fruit-price"><strong>Price:</strong> {poultry.price}</p>
            <p>Quantity: {poultry.quantity}</p>
            <p>Offers: {poultry.offers}</p>
            <p className="fruit-date"><strong>Date of Harvest:</strong> {poultry.dateOfHarvest}</p>
            {poultry.offers !== 0 && (
                <p className="fruit-offers"><strong>Offers</strong> {poultry.offers}</p>
            )}
            {/* <p className="fruit-image"><strong>""Idhar Image dalna hai SHREYAA""</strong> {poultry.imageUrl}</p> */}
            <p>Discription : {poultry.discription}</p>
            <div>
                {review &&
                    <p>Review by {username} : {review}</p>
                }
                {rating &&
                    <p>Ratings by {username} : {rating}</p>
                }
            </div>
    </div>
  )
}

export default AddPoultryItem