import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCart } from '../CartContext';

const Navbar = ({ isLoggedIn, onLogout }) => {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar">
            <h1 className="logo">Sharma Confectionery</h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart {totalItems > 0 && `(${totalItems})`}</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/about">About Us</Link></li>
                {isLoggedIn ? (
                    <>
                        <li>Welcome</li> {/* Show Welcome message if authenticated */}
                        <li><button onClick={onLogout} className="logout-btn">Logout</button></li> {/* Show Logout button if authenticated */}
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li> {/* Show Login link if not authenticated */}
                        <li><Link to="/signup">Sign Up</Link></li> {/* Show Sign Up link if not authenticated */}
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
