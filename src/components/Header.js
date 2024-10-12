import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Import the CSS file


function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light w-100">
        <div className="container-fluid" style={{ paddingLeft: '0', paddingRight: '0' }}>
          <a className="navbar-brand" href="/" style={{ marginLeft: '10px', color: '#474BCA', fontWeight: 'bold' }}>
            WILAS
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
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
    </header>
  );
}

export default Header;
