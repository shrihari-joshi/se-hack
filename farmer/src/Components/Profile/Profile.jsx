import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; // Import the CSS file for styling
const ProfilePage = () => {
  const user=JSON.parse(localStorage.getItem('user'))
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Define a function to fetch user data from MongoDB
    const user = JSON.parse(localStorage.getItem('user'))
    const fetchUserData = async () => {
      setLoading(true)
      try {
        const response = await axios.get('http://localhost:3500/farmer', {
          params: {
            // farmername: user.farmername
          }
        });
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        console.log('user connected');
        console.log(userData);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching user data');
        setLoading(false);
      }
    };

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
      <div className="profile-info">
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Username:</strong> {userData.farmername}</p>
        <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
        {userData.street && (
          <div>
            <p><strong>Address:</strong></p>
            <p>{userData.street}</p>
            <p>{userData.city}, {userData.pincode}</p>
            <p>{userData.state}</p>
          </div>
        )}
      </div>
    </div>
  );

};

export default ProfilePage;
