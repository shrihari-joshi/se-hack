import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; // Import the CSS file for styling

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
    const user = JSON.parse(localStorage.getItem('user'))

    const fetchUserData = async () => {
      setLoading(true)
      try {
        const response = await axios.get('http://localhost:3500/farmer/login', {
          params: {
            farmername: user.farmername,
            password : user.password
          }
        });
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        console.log('user connected');
        setUserData(response.data);
        console.log(userData);
        setLoading(false);
      } catch (error) {
        setError('Error fetching user data');
        setLoading(false);
      }
    };

  useEffect(() => {
    // Define a function to fetch user data from MongoDB

    fetchUserData(); // Call the function to fetch user data
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile-page-container">
      <h2>Profile</h2>
      {userData ? (
        <div className="profile-info">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Username:</strong> {userData.farmername}</p>
          <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
          {userData.address && (
            <div>
              <p><strong>Address:</strong></p>
              <p>{userData.address.street}</p>
              <p>{userData.address.city}, {userData.address.pincode}</p>
              <p>{userData.address.state}</p>
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
  
};

export default Profile;