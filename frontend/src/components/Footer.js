import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="shop-details">Your favorite shop for all things delicious!</p>
                <div className="footer-links">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="social-links">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">Snapchat</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sharma Confectionary . All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;