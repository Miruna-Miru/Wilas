import React, { useState } from 'react';
import '../App.css'; 

const Profile = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">Profile</h2>

      <div className="profile-pic-container">
        <img 
          src="https://via.placeholder.com/100" 
          alt="Profile"
          className="profile-pic"
        />
        <p className="profile-name">Your Name</p>
      </div>

      <div className="profile-buttons">
        <button 
          className={`custom-button ${activeButton === 'account' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('account')}
        >
          Account Info
        </button>

  
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