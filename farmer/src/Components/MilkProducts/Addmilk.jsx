import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Addmilk.css'; // Import CSS file for styling
import MilkItems from './MilkItems';
import { useNavigate } from 'react-router-dom';

function Addmilk() {
    // State variables for form fields
    const [dairy, setDairy] = useState([]);
    const [productName, setProductName] = useState('');
    const [dateOfHarvest, setDateOfHarvest] = useState(new Date());
    const [expiryDate, setExpiryDate] = useState(new Date());
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [offer, setOffer] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        try {
            const response = await axios.post('http://localhost:3500/addproduct', {
                farmername: user.username || user.farmername,
                productName: productName,
                category: "dairy",
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
                params : {
                    category : 'dairy'
                }
            });
            console.log(response.data);
            setDairy(response.data);
        } catch (error) {
            console.log(error.message);
            notifyError(error.message);
        }
    };

    return (
        <div className="product-form-container">
            <h2>Add Milk Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="dateOfHarvest">Date of Harvest:</label>
                    <input type="date" id="dateOfHarvest" value={dateOfHarvest.toISOString().substr(0, 10)} onChange={(e) => setDateOfHarvest(new Date(e.target.value))} />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input type="date" id="expiryDate" value={expiryDate.toISOString().substr(0, 10)} onChange={(e) => setExpiryDate(new Date(e.target.value))} />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="offer">Offer:</label>
                    <input type="number" id="offer" value={offer} onChange={(e) => setOffer(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit">Add Product</button>
            </form>
            <div className='sj-product-right'>
                <ul className='sj-products'>
                    {dairy.map((diaryItem, index) => (
                        <li key={index}>
                            <div> 
                                <MilkItems
                                    diaryItem={diaryItem}
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

export default Addmilk;
