// Addvege.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Addvege.css'; // Import CSS file for styling
import VegeItem from './VegeItem';

function Addvege() {
  // State variables for form fields
  const [vegetables, setVegetables] = useState([]);
  const [productName, setProductName] = useState('');
  const [dateOfHarvest, setDateOfHarvest] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [offer, setOffer] = useState('');
  const [description, setDescription] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    try {
      const response = await axios.post('http://localhost:3500/addproduct', {
        farmername: user.username || user.farmername,
        productName: productName,
        category: "vegetable",
        dateOfHarvest: dateOfHarvest,
        dateOfExpiry: expiryDate,
        price: price,
        offer: offer,
        description: description,
        quantity: quantity
      });
      console.log(response.data);

      // Reset form fields after successful submission
      setProductName('');
      setDateOfHarvest(new Date());
      setExpiryDate(new Date());
      setQuantity('');
      setPrice('');
      setOffer('');
      setDescription('');

      notifySuccess('Product added successfully!');
    } catch (error) {
      console.log(error.message);
      notifyError('Failed to add product.');
    }
  };

  const notifyError = (msg) => toast.error(msg, { position: 'top-center' });
  const notifyWarning = (msg) => toast.warn(msg, { position: 'top-center' });
  const notifySuccess = (msg) => toast.success(msg, { position: 'top-center' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3500/getallproducts', {
        params: {
          category: 'vegetable'
        }
      });
      console.log(response.data);
      setVegetables(response.data);
    } catch (error) {
      console.log(error.message);
      notifyError(error.message);
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add Vegetable Product</h2>
      <form className='Fruit-container' onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" id="productName" className='fruit-input' placeholder='Product Name' value={productName} onChange={(e) => setProductName(e.target.value)} />
          <span class="input-border"></span>
        </div>
        <div className="form-group">
          <input type="date" id="dateOfHarvest" className='fruit-input' placeholder='Product Name' value={dateOfHarvest.toISOString().substr(0, 10)} onChange={(e) => setDateOfHarvest(new Date(e.target.value))} />
          <span class="input-border"></span>
        </div>
        <div className="form-group">
          <input type="date" id="expiryDate" className='fruit-input' placeholder='Product Name' value={expiryDate.toISOString().substr(0, 10)} onChange={(e) => setExpiryDate(new Date(e.target.value))} />
          <span class="input-border"></span>
        </div>
        <div className="form-group">
          <input type="number" id="quantity" className='fruit-input' placeholder='Product Name' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <span class="input-border"></span>
        </div>
        <div className="form-group">
          <input type="number" id="price" className='fruit-input' placeholder='Product Name' value={price} onChange={(e) => setPrice(e.target.value)} />
          <span class="input-border"></span>
        </div>
        <div className="form-group">
          <input type="number" id="offer" className='fruit-input' placeholder='Product Name' value={offer} onChange={(e) => setOffer(e.target.value)} />
          <span class="input-border"></span>
        </div>
        <div className="form-group">
          <textarea id="description" className='fruit-input' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
          <span class="input-border"></span>
        </div>
        <button className='sj-buttom-custom' type="submit">Add Product</button>
      </form>
      <div className='sj-product-right'>
        <ul className='sj-products'>
          {vegetables.map((vegetable, index) => (
            <li key={index}>
              <div>
                <VegeItem
                  vegetable={vegetable}  // Pass vegetable object as prop
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={true} />
    </div>
  );
}

export default Addvege;
