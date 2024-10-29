import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

function Footer() {
    return (
        <footer>
            <div className="container">
                <h1 className="font-weight-bold">UniVerse</h1>
                <p className="text-muted">Voices, Visions, and Ventures of Our Campus</p>

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
                        <div className="social-icons">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
