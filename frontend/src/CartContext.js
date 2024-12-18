import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem.quantity > 1) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            return prevItems.filter(item => item.id !== product.id);
        });
    };

    
    const resetCart = () => {
        setCartItems([]); 
    };

    
    const handleLogout = () => {
        
        resetCart();
        
    };

    
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, resetCart, handleLogout }}>
            {children}
        </CartContext.Provider>
    );
};
