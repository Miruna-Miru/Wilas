import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css'; 

const Profile = () => {
  const [activeButton, setActiveButton] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    if (button === 'account') {
      navigate('/account-info'); // Navigate to Account Info page
    } else if (button === 'notifications') {
      navigate('/notifications'); // Navigate to Notifications page
    } else if (button === 'community') {
      navigate('/community'); // Navigate to Community page
    }
  };

  const handleButton = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === 'seePublishedBlogs') {
      navigate('/published-blogs'); // Navigate to published blogs page
    } else if (buttonName === 'seeSavedBlogs') {
      navigate('/saved-blogs'); // Navigate to saved blogs page
    } else if (buttonName === 'logout') {
      localStorage.removeItem('username'); // Clear username on logout
      navigate('/login'); // Redirect to login page
    }
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
        <p className="profile-name">{username || 'Your Name'}</p> {/* Display username */}
      </div>

      <div className="profile-buttons">
        <button 
          className={`custom-button ${activeButton === 'account' ? 'active' : ''}`} 
          onClick={() => handleButtonClick('account')}
        >
          Account Info
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
          className={`custom-button ${activeButton === 'seeSavedBlogs' ? 'active' : ''}`} 
          onClick={() => handleButton('seeSavedBlogs')}
        >
          See Saved Blogs
        </button>

        <button 
          className={`custom-button ${activeButton === 'seePublishedBlogs' ? 'active' : ''}`} 
          onClick={() => handleButton('seePublishedBlogs')}
        >
          See Published Blogs
        </button>

        <button 
          className="btn btn-danger" 
          onClick={() => handleButton('logout')}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
