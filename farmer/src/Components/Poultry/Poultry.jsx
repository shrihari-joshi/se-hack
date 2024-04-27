import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import PoultryItems from './PoultryItems';

const Poultry = () => {

  const [poultry, setPoultry] = useState([]);
  const userData = localStorage.getItem('currentUser');
  const user = userData ? JSON.parse(userData) : null;

  const notifyError = (msg) => toast.error(msg, { position: 'top-center' });
  const notifyWarning = (msg) => toast.warn(msg, { position: 'top-center'})
  const notifySuccess = (msg) => toast.success(msg, { position: 'top-center' });

  const fetchPoultry = async () => {
    try {
        const response = await axios.post('http://localhost:3500/getallproducts');
        console.log(response.data);
        setPoultry(response.data);
    } catch (error) {
        notifyError(error.message);
    }
};

useEffect(() => {
    fetchPoultry();
}, []);


const addToCart = async (poult, quantity) => {
  try {
      if (user) {
          const response = await axios.post('http://localhost:3500/addToCart', {
              username: user.username,
              name: poult.name,
              type: "poultry",
              quantity: quantity,
          });
          if (response.data.length === 0) {
              <h1>Cart is empty</h1>
          }
          console.log(`${response.data} added to cart`);
          notifySuccess(`${poult.name} added to cart successfully`);
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
                <p className='base'>Get Fresh Poultry Products</p>
            </div>
            <ul className='products'>
                {poultry.map((poult, index) => (
                    <li key={index}>
                        <div> 
                            <PoultryItems
                                poult={poult}
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

export default Poultry