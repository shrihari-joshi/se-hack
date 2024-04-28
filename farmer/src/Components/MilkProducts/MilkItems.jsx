import React from 'react';

const MilkItems = ({ dairyItem }) => {
  if (!dairyItem || !dairyItem.productName) {
    return <div>No product data available</div>;
  }

  return (
    <div>
      <h3 className="fruit-name">{dairyItem.productName}</h3>
      <p className="fruit-price"><strong>Price:</strong> {dairyItem.price}</p>
      <p>Quantity: {dairyItem.quantity}</p>
      <p>Offers: {dairyItem.offer}</p> {/* Changed 'offers' to 'offer' to match your state variable */}
      <p className="fruit-date"><strong>Date of Harvest:</strong> {dairyItem.dateOfHarvest}</p>
      {dairyItem.offer !== 0 && (
        <p className="fruit-offers"><strong>Offers</strong> {dairyItem.offer}</p>
      )}
      {/* <p className="fruit-image"><strong>""Idhar Image dalna hai SHREYAA""</strong> {dairyItem.imageUrl}</p> */}
      <p>Description: {dairyItem.description}</p> {/* Corrected 'discription' to 'description' */}
    </div>
  );
};

export default MilkItems;
