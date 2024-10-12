import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 

function Header() {
 
  const [isButtonsVisible, setButtonsVisible] = useState(false);


  const [isToggled, setIsToggled] = useState(false);

  const profileRef = useRef(null);


  const toggleButtons = () => {
    setButtonsVisible(!isButtonsVisible);
  };


  const handleToggle = () => {
    setIsToggled(!isToggled);
  };


  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setButtonsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light w-100">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            WILAS
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">Settings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={toggleButtons} style={{ cursor: 'pointer' }}>Profile</a>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn ${isToggled ? 'btn-danger' : 'btn-primary'}`}
                  onClick={handleToggle}
                  style={{ color: '#FFF', border: 'none' }}
                >
                  {isToggled ? 'Logout' : 'Login/Signup'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isButtonsVisible && (
        <div ref={profileRef} className="buttons-section" style={{ backgroundColor: '#fff', padding: '15px', position: 'absolute', top: '60px', right: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', zIndex: '1000', width: '250px' }}>
          <div className="profile-pic-container" style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img
              src="https://via.placeholder.com/100" 
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
    </header>
  );
}

export default Header;
