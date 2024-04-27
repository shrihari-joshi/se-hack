import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import MilkProductItems from './MilkProductItems';

const MilkProducts = () => {

  const [milkProducts, setMilkProducts] = useState([]);
  const userData = localStorage.getItem('currentUser');
  const user = userData ? JSON.parse(userData) : null;

  const notifyError = (msg) => toast.error(msg, { position: 'top-center' });
  const notifyWarning = (msg) => toast.warn(msg, { position: 'top-center'})
  const notifySuccess = (msg) => toast.success(msg, { position: 'top-center' });

  const fetchMilkProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3500/getAllFruits');
        console.log(response.data);
        setMilkProducts(response.data);
    } catch (error) {
        notifyError(error.message);
    }
};

useEffect(() => {
    fetchMilkProducts();
}, []);


  return (
    <div>
            <div className='mainbase'>
                <p className='base'>Get Fresh Fruits</p>
            </div>
            <ul className='products'>
                {milkProducts.map((milkProduct, index) => (
                    <li key={index}>
                        <div> 
                            <MilkProductItems
                                milkProduct={milkProduct}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={true} />
        </div>
  )
}

export default MilkProducts