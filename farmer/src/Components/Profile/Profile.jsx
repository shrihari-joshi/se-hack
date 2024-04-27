import React, { useState, useEffect } from 'react';
import './Profile.css';

const ProfileCard = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch profile data from the backend API
    fetch('https://your-backend-api.com/profile')
      .then(response => response.json())
      .then(data => setProfileData(data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  if (!profileData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-card">
      <img src={profileData.profilePicture} alt="Profile Picture" className="profile-picture" />
      <div className="profile-info">
        <h2 className="profile-name">{profileData.name}</h2>
        <p className="profile-title">{profileData.title}</p>
        <p className="profile-location">{profileData.location}</p>
        <div className="profile-stats">
          <div className="stat">
            <p className="stat-label">Connections</p>
            <p className="stat-value">{profileData.connections}</p>
          </div>
          <div className="stat">
            <p className="stat-label">Posts</p>
            <p className="stat-value">{profileData.posts}</p>
          </div>
          <div className="stat">
            <p className="stat-label">Followers</p>
            <p className="stat-value">{profileData.followers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
