import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                <a className="nav-link" href="/profile" style={{ color: '#474BCA' }}>
                  Profile
                </a>
              </li>
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
                                    fontFamily: "'Times New Roman', Times, serif",fontSize: '18px',
                                }}
                                onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.6)'}
                                onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
                            >
                                Sign Up
                            </Nav.Link>

                            <Nav.Link onClick={handleLogin} style={{
                                color: '#474BCA',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                padding: '10px 15px',
                                margin: '0 10px',
                                borderRadius: '20px',
                                transition: 'box-shadow 0.3s',
                                boxShadow: 'none',
                                fontFamily: "'Times New Roman', Times, serif",fontSize: '18px',
                            }} onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.6)'}
                                onMouseLeave={(e) => e.target.style.boxShadow = 'none'}>Login</Nav.Link>
                        </>
            </ul>
          </div>
        </div>
      </nav>

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
