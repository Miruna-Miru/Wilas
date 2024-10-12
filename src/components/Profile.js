import React, { useState } from 'react';
import '../App.css'; // Ensure the correct path to your CSS file

const Profile = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">Profile</h2>

      {/* Profile Picture and Name */}
      <div className="profile-pic-container">
        <img 
          src="https://via.placeholder.com/100" // Replace with your DP URL
          alt="Profile"
          className="profile-pic"
        />
        <p className="profile-name">Your Name</p> {/* Replace with the actual name */}
      </div>

      {/* Account Info Button */}
      <div className="profile-buttons">
        <button 
          className={`custom-button ${activeButton === 'account' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('account')}
        >
          Account Info
        </button>

        {/* Additional Buttons */}
        <button 
          className={`custom-button ${activeButton === 'saved' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('saved')}
        >
          Saved
        </button>
        <button 
          className={`custom-button ${activeButton === 'notifications' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('notifications')}
        >
          Notifications
        </button>
        <button 
          className={`custom-button ${activeButton === 'community' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('community')}
        >
          Community
        </button>
        <button 
          className="btn btn-danger" 
          onClick={() => handleButtonClick('logout')}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
