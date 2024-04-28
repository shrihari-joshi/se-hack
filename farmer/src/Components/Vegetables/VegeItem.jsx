// VegeItem.js

import React from 'react';

const VegeItem = ({ vegetable }) => {
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
    </div>
  );
}

export default VegeItem;
