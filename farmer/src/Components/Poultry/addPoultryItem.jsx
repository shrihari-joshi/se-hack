import React from 'react'

const AddPoultryItem = (poultry) => {
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
    </div>
  )
}

export default AddPoultryItem