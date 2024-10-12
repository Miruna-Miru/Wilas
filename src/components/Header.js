import React, { useState } from 'react';
import '../App.css'; // Go up one level to access App.css
// Make sure this file contains your custom styles

function Header() {
  // State to manage the visibility of the buttons
  const [isButtonsVisible, setButtonsVisible] = useState(false);

  // Toggle function for button visibility
  const toggleButtons = () => {
    setButtonsVisible(!isButtonsVisible);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light w-100" style={{ backgroundColor: '#F9E6E6', padding: '10px', position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '1000' }}>
        <div className="container-fluid" style={{ paddingLeft: '0', paddingRight: '0' }}>
          <a className="navbar-brand" href="/" style={{ marginLeft: '10px', color: '#474BCA', fontWeight: 'bold' }}>
            WILAS
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{ marginRight: '10px' }}>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: '#474BCA' }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings" style={{ color: '#474BCA' }}>
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={toggleButtons} style={{ color: '#474BCA', cursor: 'pointer' }}>
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login" style={{ color: '#474BCA' }}>
                  Login/Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isButtonsVisible && (
        <div className="buttons-section" style={{ backgroundColor: '#fff', padding: '15px', position: 'absolute', top: '60px', right: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', zIndex: '1000', width: '250px' }}>
          <div className="profile-pic-container" style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img
              src="https://via.placeholder.com/100" // Replace with your DP URL
              alt="Profile"
              className="profile-pic"
              style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '5px' }}
            />
            <p className="profile-name" style={{ margin: '0', fontWeight: 'bold', color: '#474BCA' }}>Your Name</p> {/* Replace with the actual name */}
          </div>
          <button className="custom-button w-100 mb-2">Account Info</button>
          <button className="custom-button w-100 mb-2">Saved</button>
          <button className="custom-button w-100 mb-2">Notifications</button>
          <button className="custom-button w-100 mb-2">Community</button>
          <button className="custom-button danger w-100">Log Out</button>
        </div>
      )}

      <style jsx="true">{`
        header {
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
        .navbar-nav .nav-link:hover {
          color: #333;
        }
      `}</style>
    </header>
  );
}

export default Header;
