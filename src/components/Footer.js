import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light text-center py-4">
      <div className="container">
        <h1 className="font-weight-bold">WILAS</h1>
        <p className="text-muted">Your tagline goes here.</p>

        <div className="row mt-4">
          <div className="col-md-6">
            <h5>About Us</h5>
            <a href="/about" className="text-dark">Learn more about us</a>
            <br />
            <h5>Contact Us</h5>
            <p>Phone: +1234567890</p>
          </div>

          <div className="col-md-6">
            <h5>Follow Us</h5>
            <a href="https://www.instagram.com" className="me-3" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com" className="me-3" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        footer {
          position: relative;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
