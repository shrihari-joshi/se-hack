import React, { useState } from 'react';
import './Subsidies.css'
import Sell from '../sellPage/sell';
import Navbar from '../Navbar/Navbar';
import axios from 'axios'

const formatResponse = (response) => {
  const paragraphs = response.split("\n\n");

  return paragraphs.map((paragraph, index) => {
    const lines = paragraph.split("**");
    return (
      <div key={index}>
        {lines.map((line, idx) => {
          if (idx % 2 === 0) {
            return (
              <p key={idx} className="weather-normal">
                {line}
              </p>
            );
          } else {
            const numberedLines = line.split(/\*\*(\d+)\. /).filter(Boolean);
            return (
              <ol key={idx} className="weather-numbered">
                {numberedLines.map((numberedLine, index) => (
                  <li key={index}>{numberedLine}</li>
                ))}
              </ol>
            );
          }
        })}
      </div>
    );
  });
};

const Subsidies = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobileNumber: '',
    documents: {
      aadharCard: false,
      passportPhoto: false,
      bankPassbook: false,
      utilityBill: false,
      vehicleRC: false,
    },
    farmArea: '',
    soilType: '',
  });
  const [response, setResponse] = useState()
  const [loading, setLoading] = useState()
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        documents: {
          ...formData.documents,
          [name]: checked,
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3500/farmerresponse', {
        soilType: formData.soilType,
        age: formData.age,
        area: formData.farmArea
      });
      setResponse(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
      // Handle error state or display error message to the user
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='subsidies'> 
        <div>
          <Navbar/>
        </div>
        <div className='head-chatbot'>

        <div className='schemes-heads'>
          <p>Check the Government Schemes that you can avail for!!</p>
        </div>
        <div className='chatbot'>
          {/* <p>Ask our AI</p> */}
        </div>
        </div>
            <div className="form-container">
            
            <form onSubmit={handleSubmit}>

              <input placeholder='Name'
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />


              <input placeholder='Age'
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                />


              <input placeholder='Mobile Number'
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                />
              <label>Documents Available:</label>
              <div className="document-checkboxes">
                <div>
                  <input
                    type="checkbox"
                    id="aadharCard"
                    name="aadharCard"
                    checked={formData.documents.aadharCard}
                    onChange={handleChange}
                    required
                    />
                  <label htmlFor="aadharCard">Aadhar Card</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="passportPhoto"
                    name="passportPhoto"
                    checked={formData.documents.passportPhoto}
                    onChange={handleChange}
                    required
                    />
                  <label htmlFor="passportPhoto">Passport Sized Photo</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="bankPassbook"
                    name="bankPassbook"
                    checked={formData.documents.bankPassbook}
                    onChange={handleChange}
                    required
                    />
                  <label htmlFor="bankPassbook">Bank Account Passbook</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="utilityBill"
                    name="utilityBill"
                    checked={formData.documents.utilityBill}
                    onChange={handleChange}
                    required
                    />
                  <label htmlFor="utilityBill">Electricity/Water Bill</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicleRC"
                    name="vehicleRC"
                    checked={formData.documents.vehicleRC}
                    onChange={handleChange}
                    required
                    />
                  <label htmlFor="vehicleRC">RC (for vehicle-related schemes)</label>
                </div>
              </div>

              <input placeholder='Area of Farm'
                type="number"
                id="farmArea"
                name="farmArea"
                value={formData.farmArea}
                onChange={handleChange}
                required
                />


              <input placeholder='Type of Soil'
                type="text"
                id="soilType"
                name="soilType"
                value={formData.soilType}
                onChange={handleChange}
                required
                />

              <button type="submit" className='subsidies-but'>Submit</button>

            </form>
            <div className='response-sub'>

                {loading && <p>Loading...</p>} 
              {response && <div className="response">{formatResponse(response)}</div>}
              {/* {error && <p className="error">{error}</p>}  */}
            </div>
          </div>
    </div>
  );
};

export default Subsidies;
