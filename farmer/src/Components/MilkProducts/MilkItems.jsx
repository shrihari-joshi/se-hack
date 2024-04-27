import React from 'react'

const MilkItems = ( dairyItem) => {
  return (
    <div>
            <h3 className="fruit-name">{dairyItem.productName}</h3>
            <p className="fruit-price"><strong>Price:</strong> {dairyItem.price}</p>
            <p>Quantity: {dairyItem.quantity}</p>
            <p>Offers: {dairyItem.offers}</p>
            <p className="fruit-date"><strong>Date of Harvest:</strong> {dairyItem.dateOfHarvest}</p>
            {dairyItem.offers !== 0 && (
                <p className="fruit-offers"><strong>Offers</strong> {dairyItem.offers}</p>
            )}
            {/* <p className="fruit-image"><strong>""Idhar Image dalna hai SHREYAA""</strong> {dairyItem.imageUrl}</p> */}
            <p>Discription : {dairyItem.discription}</p>
    </div>
  )
}

export default MilkItems