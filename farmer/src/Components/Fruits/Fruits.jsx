import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import FruitsItem from './FruitsItem';

const Fruits = () => {

  const [fruits, setFruits] = useState([]);
  const userData = localStorage.getItem('currentUser');
  const user = userData ? JSON.parse(userData) : null;

  const notifyError = (msg) => toast.error(msg, { position: 'top-center' });
  const notifyWarning = (msg) => toast.warn(msg, { position: 'top-center'})
  const notifySuccess = (msg) => toast.success(msg, { position: 'top-center' });

  const fetchFruits = async () => {
    try {
        const response = await axios.get('http://localhost:3500/getAllFruits');
        console.log(response.data);
        setFruits(response.data);
    } catch (error) {
        notifyError(error.message);
    }
};

useEffect(() => {
    fetchFruits();
}, []);

const addToCart = async (fruit, quantity) => {
  try {
      if (user) {
          const response = await axios.post('http://localhost:3500/addToCart', {
              username: user.username,
              name: fruit.name,
              type: "fruits",
              quantity: quantity,
          });
          if (response.data.length === 0) {
              <h1>Cart is empty</h1>
          }
          console.log(`${response.data} added to cart`);
          notifySuccess(`${fruit.name} added to cart successfully`);
      }
      else {
          notifyWarning('Login to add items to Cart')
      }
      // navigate('/cart')
  } catch (error) {
      console.log(error);
  }
};

  return (
    <div>
            <div className='mainbase'>
                <p className='base'>Get Fresh Fruits</p>
            </div>
            <ul className='products'>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        <div> 
                            <FruitsItem
                                fruit={fruit}
                                addToCart={addToCart}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={true} />
        </div>
  )
}

export default Fruits