import React, { useState } from 'react';
import './Subsidies.css'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add validation logic to ensure all fields are filled
    // and handle form submission as needed
    console.log(formData);
  };

  return (
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Subsidies;
