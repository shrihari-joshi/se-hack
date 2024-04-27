import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import VegetableItems from './VegetableItems';

const Vegetables = () => {

  const [vegetables, setVegetables] = useState([]);
  const userData = localStorage.getItem('currentUser');
  const user = userData ? JSON.parse(userData) : null;

  const notifyError = (msg) => toast.error(msg, { position: 'top-center' });
  const notifyWarning = (msg) => toast.warn(msg, { position: 'top-center'})
  const notifySuccess = (msg) => toast.success(msg, { position: 'top-center' });

  const fetchVegetables = async () => {
    try {
        const response = await axios.get('http://localhost:3500/getAllFruits');
        console.log(response.data);
        setVegetables(response.data);
    } catch (error) {
        notifyError(error.message);
    }
};

useEffect(() => {
    fetchVegetables();
}, []);


  return (
    <div>
            <div className='mainbase'>
                <p className='base'>Get Fresh Vegetables</p>
            </div>
            <ul className='products'>
                {vegetables.map((vegetable, index) => (
                    <li key={index}>
                        <div> 
                            <VegetableItems
                                vegetable={vegetable}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={true} />
        </div>
  )
}

export default Vegetables