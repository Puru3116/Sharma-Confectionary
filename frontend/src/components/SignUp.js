import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './SignUp.css';

const SignUp = ({ onSignup }) => {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        setMessage("Passwords do not match!");
        return;
    }
    try {
        await axios.post("http://localhost:5000/api/auth/register", { email, password });
        setMessage("Signup successful! Redirecting to home page...");

        onSignup();  // Call the onSignup function to mark user as logged in
        
        // Redirect to the home page after signup
        navigate("/"); 
    } catch (error) {
        setMessage("Signup failed: " + (error.response.data.message || error.message));
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-signup">Sign Up</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default SignUp;
