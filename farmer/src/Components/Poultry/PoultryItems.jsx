import React, { useState } from 'react';

const PoultryItems = ({ poult,addToCart }) => { 
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setSelectedQuantity(Number(e.target.value));
    };
    
    return (
        <div className="poult-container">
            <h3 className="poult-name">{poult.name}</h3>
            <p className="poult-price"><strong>Price:</strong> {poult.price}</p>
            <p className="poult-date"><strong>Date of Harvest:</strong> {poult.dateOfHarvest}</p>
            {poult.offers !== 0 && (
                <p className="poult-offers"><strong>Offers</strong> {poult.offers}</p>
            )}
            <p className="poult-image"><strong>""Idhar Image dalna hai SHREYAA""</strong> {poult.imageUrl}</p>

            <input
                type="number"
                min="1"
                value={selectedQuantity}
                onChange={handleQuantityChange}
                className="fruit-quantity"
            />
           
           <div className="btn-container">
                <button onClick={() => addToCart(poult, selectedQuantity)} className="poult-btn">Add To Cart</button>
            </div>
        </div>
    );
};

export default PoultryItems;