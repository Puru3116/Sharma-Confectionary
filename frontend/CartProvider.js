import React from 'react';
import { CartProvider } from './CartContext';
import Home from './Home';
import Cart from './Cart';

const App = () => {
    return (
        <CartProvider>
            <Home />
            <Cart />
        </CartProvider>
    );
};

export default App;