import React, { useState } from 'react';

const MilkProductItems = ({ milkProduct }) => { 
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setSelectedQuantity(Number(e.target.value));
    };
    
    return (
        <div className="milkProduct-container">
            <h3 className="milkProduct-name">{milkProduct.name}</h3>
            <p className="milkProduct-price"><strong>Price:</strong> {milkProduct.price}</p>
            <p className="milkProduct-date"><strong>Date of Harvest:</strong> {milkProduct.dateOfHarvest}</p>
            {milkProduct.offers !== 0 && (
                <p className="milkProduct-offers"><strong>Offers</strong> {milkProduct.offers}</p>
            )}
            <p className="milkProduct-image"><strong>""Idhar Image dalna hai SHREYAA""</strong> {milkProduct.imageUrl}</p>

            <input
                type="number"
                min="1"
                value={selectedQuantity}
                onChange={handleQuantityChange}
                className="fruit-quantity"
            />
           
        </div>
    );
};

export default MilkProductItems;