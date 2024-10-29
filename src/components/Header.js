import React, { useEffect, useState, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Header.css';
function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isButtonsVisible, setButtonsVisible] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    setIsLoggedIn(!!username);
  }, []);

  const handleLogin = () => {
    window.location.href = '/Login';
  };

  const handleSignUp = () => {
    window.location.href = '/SignUp';
  };

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

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#f7f7f7',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const hoverButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ffb6c1', // Pink on hover
  };

  const iconStyle = {
    marginRight: '8px',
    fontSize: '16px',
    color: '#474BCA',
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
                <a className="nav-link" onClick={toggleButtons} style={{ cursor: 'pointer', color: '#474BCA' }}>
                  Profile
                </a>
              </li>

              {!isLoggedIn ? (
                <>
                  <Nav.Link
                    onClick={handleSignUp}
                    style={{
                      color: '#474BCA',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      padding: '10px 15px',
                      margin: '0 10px',
                      borderRadius: '20px',
                      transition: 'box-shadow 0.3s',
                      boxShadow: 'none',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '18px',
                    }}
                    onMouseEnter={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.6)')}
                    onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
                  >
                    Sign Up
                  </Nav.Link>

                  <Nav.Link
                    onClick={handleLogin}
                    style={{
                      color: '#474BCA',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      padding: '10px 15px',
                      margin: '0 10px',
                      borderRadius: '20px',
                      transition: 'box-shadow 0.3s',
                      boxShadow: 'none',
                      fontFamily: "'Times New Roman', Times, serif",
                      fontSize: '18px',
                    }}
                    onMouseEnter={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.6)')}
                    onMouseLeave={(e) => (e.target.style.boxShadow = 'none')}
                  >
                    Login
                  </Nav.Link>
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>

      {/* Profile dropdown section */}
      {isButtonsVisible && (
        <div
          ref={profileRef}
          className="buttons-section"
          style={{
            backgroundColor: '#fff',
            padding: '15px',
            position: 'absolute',
            top: '60px',
            right: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
            width: '250px',
          }}
        >
          <div className="profile-pic-container" style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="profile-pic"
              style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '5px' }}
            />
            <p className="profile-name" style={{ margin: '0', fontWeight: 'bold', color: '#474BCA' }}>
              Your Name
            </p>
          </div>
          <button className="custom-button w-100 mb-2" style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#ffb6c1'} onMouseLeave={(e) => e.target.style.backgroundColor = '#f7f7f7'}>
            <i className="fas fa-user" style={iconStyle}></i> Account Info
          </button>
          <button className="custom-button w-100 mb-2" style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#ffb6c1'} onMouseLeave={(e) => e.target.style.backgroundColor = '#f7f7f7'}>
            <i className="fas fa-bookmark" style={iconStyle}></i> Saved
          </button>
          <button className="custom-button w-100 mb-2" style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#ffb6c1'} onMouseLeave={(e) => e.target.style.backgroundColor = '#f7f7f7'}>
            <i className="fas fa-bell" style={iconStyle}></i> Notifications
          </button>
          <button className="custom-button w-100 mb-2" style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#ffb6c1'} onMouseLeave={(e) => e.target.style.backgroundColor = '#f7f7f7'}>
            <i className="fas fa-users" style={iconStyle}></i> Community
          </button>
          <button className="custom-button danger w-100" style={buttonStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#ffb6c1'} onMouseLeave={(e) => e.target.style.backgroundColor = '#f7f7f7'}>
            <i className="fas fa-sign-out-alt" style={iconStyle}></i> Log Out
          </button>
        </div>
      )}
      <style jsx="true">{`
        header {
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' linecap='round' linejoin='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>
    </header>
  );
}

export default Header;