
import React from 'react';
import { useCart } from './CartContext';
import './Cart.css'; 

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();

    
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handlePayment = () => {
        const options = {
            key: "rzp_test_BOV233VghAESCl", 
            amount: subtotal * 100, 
            currency: "INR",
            name: "Sharma Confectionery",
            description: "Your order description",
            image: "https://example.com/your_logo",
            handler: function (response) {
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                
            },
            prefill: {
                name: "Shivansh Sharma",
                email: "shivanshsharma2704@gmail.com",
                contact: "9941867608",
            },
            notes: {
                address: "",
            },
            theme: {
                color: "#F37254",
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <h1 className='empty'>Your cart is empty</h1>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>Price: ₹{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    ))}
                    <h3 className="subtotal">Subtotal: ₹{ subtotal}</h3>
                    <button className="proceed-button" onClick={handlePayment}>Proceed to Payment</button>
                </>
            )}
        </div>
    );
};

export default Cart;