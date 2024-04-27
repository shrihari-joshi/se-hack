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
    // const [description, setDescription] = useState('');
    const [description, setDescription] = useState('');

    const user = JSON.parse(localStorage.getItem('user'))
    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        try {
            const response = await axios.post('http://localhost/3500/addproduct', {
                farmername: user.username || user.farmername,
                productName: productName,
                category: "fruit",
                dateOfHarvest: dateOfHarvest,
                price: price,
                offer: offer,
                description: description,
                // description: description,
                quantity: quantity
            })
            console.log(response.data);
        }
        catch (error) {
            console.log(error.message)
        }
    };

    const [fruits, setFruits] = useState([]);
    const userData = localStorage.getItem('currentUser');
    //   const user = userData ? JSON.parse(userData) : null;

    const notifyError = (msg) => toast.error(msg, { position: 'top-center' });
    const notifyWarning = (msg) => toast.warn(msg, { position: 'top-center' })
    const notifySuccess = (msg) => toast.success(msg, { position: 'top-center' });

    const fetchFruits = async () => {
        try {
            const response = await axios.get('http://localhost:3500/getallproducts', {
                params: {
                    category: 'fruit'
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
                <form className='Fruit-container' onSubmit={handleSubmit}>
                    <div className="w-3/4 sj-form-group-custom ">
                        <input type="text" id="productName" className='fruit-input' placeholder='Product Name' value={productName} onChange={(e) => setProductName(e.target.value)} />
                        <span class="input-border"></span>
                    </div>

                    <div className="sj-form-group-custom">
                        <input type="number " id="quantity" className='fruit-input' placeholder='Quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        <span class="input-border"></span>
                    </div>

                    <div className='sj-product-form'>
                        <div className="sj-form-group-custom fruit-date1 mr-2">
                            <input type="date" id="dateOfHarvest" className='fruit-input' placeholder='HarvestDate' value={dateOfHarvest} onChange={(e) => setDateOfHarvest(e.target.value)} />
                            <span class="input-border"></span>
                        </div>

                        <div className="sj-form-group-custom fruit-date2">
                            <input type="date" id="expiryDate" className='fruit-input' placeholder='Expiry-Date' value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                            <span class="input-border"></span>
                        </div>
                    </div>

                    <div className='sj-product-form'>
                        <div className="sj-form-group-custom">
                            <input type="number " id="price" className='fruit-input' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                            <span class="input-border"></span>
                        </div>
                        <div className="sj-form-group-custom">
                            <input type="number " id="offer" className='fruit-input' placeholder='Offer' value={description} onChange={(e) => setDescription(e.target.value)} />
                            <span class="input-border"></span>
                        </div>
                    </div>
                    <div className="sj-form-group-custom">
                        <textarea id="description" className='fruit-input' placeholder='Description' />
                        <span class="input-border"></span>
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
            <div className="sj-product-form-container-custom1"></div>
        </div>
    );
}

export default ProductForm;