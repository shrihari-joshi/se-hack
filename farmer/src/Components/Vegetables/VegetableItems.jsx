import React, { useState } from 'react';

const VegetableItems = ({ vegetable, addToCart }) => { 
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setSelectedQuantity(Number(e.target.value));
    };
    
    return (
        <div className="vegetable-container">
            <h3 className="vegetable-name">{vegetable.name}</h3>
            <p className="vegetable-price"><strong>Price:</strong> {vegetable.price}</p>
            <p className="vegetable-date"><strong>Date of Harvest:</strong> {vegetable.dateOfHarvest}</p>
            {vegetable.offers !== 0 && (
                <p className="vegetable-offers"><strong>Offers</strong> {vegetable.offers}</p>
            )}
            <p className="vegetable-image"><strong>""Idhar Image dalna hai SHREYAA""</strong> {vegetable.imageUrl}</p>

            <input
                type="number"
                min="1"
                value={selectedQuantity}
                onChange={handleQuantityChange}
                className="vegetable-quantity"
            />

            <div className="btn-container">
                <button onClick={() => addToCart(vegetable, selectedQuantity)} className="vegetable-btn">Add To Cart</button>
            </div>
        </div>
    );
};

export default VegetableItems;