import React, { useState } from 'react';
import axios from 'axios';
import './Addfruit.css'; // Import CSS file for styling

function ProductForm() {
    // State variables for form fields
    const [productName, setProductName] = useState('');
    const [dateOfHarvest, setDateOfHarvest] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [offer, setOffer] = useState('');
    const [description, setDescription] = useState('');

    const user = JSON.parse(localStorage.getItem('user'))
    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        const response = await axios.post('http://localhost/3500/farmer/addproduct', {
            farmername: user.username || user.farmername,
            productName: productName,
            category: category,
            dateOfHarvest: dateOfHarvest,
            price: price,
            offer: offer,
            description: description,
            quantity: quantity
        })
        console.log(response.data);
    };

    return (
        <div className="product-form-container-custom">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group-custom">
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div className="form-group-custom">
                    <label htmlFor="dateOfHarvest">Date of Harvest:</label>
                    <input type="date" id="dateOfHarvest" value={dateOfHarvest} onChange={(e) => setDateOfHarvest(e.target.value)} />
                </div>
                <div className="form-group-custom">
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input type="date" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                </div>
                <div className="form-group-custom">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="form-group-custom">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group-custom">
                    <label htmlFor="offer">Offer:</label>
                    <input type="number" id="offer" value={offer} onChange={(e) => setOffer(e.target.value)} />
                </div>
                <div className="form-group-custom">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default ProductForm;