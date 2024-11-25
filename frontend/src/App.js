import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Cart from './Cart';
import Payment from './components/Payment';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { CartProvider } from './CartContext'; 
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token"); 
        localStorage.removeItem("cartItems"); 
      
    };
    

    return (
      <CartProvider>
        <Router>
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<AboutUs />} />
                <Route 
                    path="/login" 
                    element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} 
                /> 
                <Route 
                    path="/signup" 
                    element={isLoggedIn ? <Navigate to="/" /> : <SignUp onSignup={handleLogin} />} 
                />
            </Routes>
            <Footer />
        </Router>
      </CartProvider>
    );
};

export default App;
