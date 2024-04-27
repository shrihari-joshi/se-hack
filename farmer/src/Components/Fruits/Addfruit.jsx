// ProductForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Addfruit.css'; // Import CSS file for styling
import FruitsItem from './FruitsItem';

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
            farmername : user.username || user.farmername,
            productName: productName,
            
            dateOfHarvest: dateOfHarvest,
            price: price,
            offer: offer,
            description: description,
            quantity: quantity
        })
        console.log(response.data);
    };

    const [fruits, setFruits] = useState([]);
    const userData = localStorage.getItem('currentUser');
//   const user = userData ? JSON.parse(userData) : null;

  const notifyError = (msg) => toast.error(msg, { position: 'top-center' });
  const notifyWarning = (msg) => toast.warn(msg, { position: 'top-center'})
  const notifySuccess = (msg) => toast.success(msg, { position: 'top-center' });

  const fetchFruits = async () => {
    try {
        const response = await axios.get('http://localhost:3500/getallproducts', {
            params : {
                category : 'fruit'
            }
        });
        console.log(response.data);
        setFruits(response.data);
    } catch (error) {
        notifyError(error.message);
    }
};

useEffect(() => {
    fetchFruits();
}, []);


    return (
        <div className='fruits'>

        <div className="sj-product-form-container-custom">
            <h2>Add Fruits</h2>
            <form onSubmit={handleSubmit}>

                <div className='sj-product-form'>
                    <div className="sj-form-group-custom">
                        <label htmlFor="productName">Product Name:</label>
                        <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </div>

                    <div className="sj-form-group-custom">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                    
                </div>

                <div className='sj-product-form'>
                    <div className="sj-form-group-custom">
                        <label htmlFor="dateOfHarvest">Date of Harvest:</label>
                        <input type="date" id="dateOfHarvest" value={dateOfHarvest} onChange={(e) => setDateOfHarvest(e.target.value)} />
                    </div>

                    <div className="sj-form-group-custom">
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input type="date" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                    </div>
                </div>
                
                <div className='sj-product-form'>
                    <div className="sj-form-group-custom">
                        <label htmlFor="price">Price:</label>
                        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="sj-form-group-custom">
                        <label htmlFor="offer">Offer:</label>
                        <input type="number" id="offer" value={offer} onChange={(e) => setOffer(e.target.value)} />
                    </div>
                </div>
                <div className="sj-form-group-custom">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" className='sj-button-custom'>Add Product</button>
                </form>
            </div>

        <div className='sj-product-right'>
        <ul className='sj-products'>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        <div> 
                            <FruitsItem
                                fruit={fruit}
                                // addToCart={addToCart}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
}

export default ProductForm;
