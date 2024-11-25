import React from 'react';
import './Payment.css';

const Payment = () => {
    const totalPrice = 100; 
    const gst = (totalPrice * 0.05).toFixed(2);
    const finalPrice = (totalPrice + parseFloat(gst)).toFixed(2);

    return (
        <div className="payment">
            <h2>Payment</h2>
            <p>Total Price: ₹{finalPrice} (including 5% GST)</p>
            <button>Pay with RazorPay</button>
        </div>
    );
};

export default Payment;