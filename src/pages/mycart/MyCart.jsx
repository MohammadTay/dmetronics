// MyCart.js
import React, { useState } from 'react';
import './MyCart.css'

const MyCart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        // Add more items as needed
    ]);

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className="cartContainer">

            <h1>My Shopping Cart</h1>
            {cartItems.map((item) => (
                <div className="cartItem" key={item.id}>

                    <span>{item.name}</span>
                    <span>${item.price}</span>
                </div>
            ))}
            <div>
                <strong>Total:</strong> ${getTotalPrice()}
            </div>
        </div>
    );
};

export default MyCart;
