// Home.js
import React from 'react';
import './Home.css';
import { useCart } from './CartContext'; 
import milkImage from './milk.jpg';
import curd from './curd.jpg';
import ghee from './ghee.jpg';
import paneer from './paneer.jpg';
import cake from './cake.jpg';
import pastry from './pastry.jpg';
import biscoff from './biscoff.jpg';
import prime from './prime.jpg';
import cavin from './cavin.jpg';
import tea from './tea.jpg';
import coffee from './coffee.jpg';
import lays from './lays.jpg';
import feastibles from './feastables.jpg';
import bisc from './bisc.jpg';
import arhar from './arhar.jpg';
import moong from './moong.jpg';
import toor from './toor.jpg';
import masoor from './masoor.jpg';
import chana from './chana.png';

const productsData = {
    dairy: [
        { id: 1, name: 'Milk', price: 35, image: milkImage },
        { id: 2, name: 'Curd', price: 40, image: curd },
        { id: 3, name: 'Ghee', price: 500, image: ghee },
        { id: 4, name: 'Paneer', price: 85, image: paneer },
    ],
    bakery: [
        { id: 5, name: 'Cake', price: 300, image: cake },
        { id: 6, name: 'Pastry', price: 50, image: pastry },
        { id: 7, name: 'Biscuits', price: 80, image: bisc },
    ],
    beverages: [
        { id: 8, name: 'Cold Drink', price: 400, image: prime },
        { id: 9, name: 'Milkshake', price: 240, image: cavin },
        { id: 10, name: 'Tea', price: 120, image: tea},
        { id: 11, name: 'Coffee', price: 600, image: coffee },
    ],
    snacks: [
        { id: 12, name: 'Chips', price: 120, image: lays },
        { id: 13, name: 'Chocolates', price: 200, image: feastibles },
        { id: 14, name: 'Biscuits', price: 240 , image: biscoff },
    ],
    cereals: [
        { id: 15, name: 'Arhar Dal', price: 50, image: arhar },
        { id: 16, name: 'Moong Dal', price: 50, image: moong },
        { id: 17, name: 'Tur Dal', price: 70, image: toor },
        { id: 18, name: 'Masoor Dal', price: 50, image: masoor },
        { id: 19, name: 'Chana Dal', price: 70, image: chana },
    ],
};

const Home = () => {
    const { addToCart } = useCart(); 

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.name} has been added to your cart!`); 
    };

    return (
        <div className="home">
            <div className ="hero">
                <h1>Welcome to Sharma Confectionery</h1>
                <p>Your one-stop destination for daily needs.</p>
            </div>
            <div className="categories">
                {Object.entries(productsData).map(([category, products]) => (
                    <div className="category-section" key={category}>
                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                        <div className="product-container">
                            {products.map(product => (
                                <div className="product-card" key={product.id}>
                                    <img src={product.image} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <p>Price: ₹{product.price}</p>
                                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;