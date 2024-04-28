import React from 'react'

const FoodStorage = ({ foodStorage}) => {
    return (
        <div>
            <h2>{foodStorage.name}</h2>
            <p>Contact: {foodStorage.phone_number}</p>
            <p>Address: {foodStorage.full_address}</p>
            <p>Review count: {foodStorage.review_count}</p>
            <p>Rating: {foodStorage.rating}</p>
            <p>Visit: {foodStorage.website}</p>
            <p>Type: {foodStorage.types.map((type, index) =>(
                type
            ))}</p>
        </div>
    )
}

export default FoodStorage