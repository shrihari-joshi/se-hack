import React, { useState } from 'react';

const FruitsItem = ({ fruit, addToCart }) => { 
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setSelectedQuantity(Number(e.target.value));
    };
    
    return (
        <div className="fruit-container">
            <h3 className="fruit-name">{fruit.name}</h3>
            <p className="fruit-price"><strong>Price:</strong> {fruit.price}</p>
            <p className="fruit-date"><strong>Date of Harvest:</strong> {fruit.dateOfHarvest}</p>
            {fruit.offers !== 0 && (
                <p className="fruit-offers"><strong>Offers</strong> {fruit.offers}</p>
            )}
            <p className="fruit-image"><strong>""Idhar Image dalna hai SHREYAA""</strong> {fruit.imageUrl}</p>

            <input
                type="number"
                min="1"
                value={selectedQuantity}
                onChange={handleQuantityChange}
                className="fruit-quantity"
            />
            <div className="btn-container">
                <button onClick={() => addToCart(fruit, selectedQuantity)} className="fruit-btn">Add To Cart</button>
            </div>
           
        </div>
    );
};

export default FruitsItem;