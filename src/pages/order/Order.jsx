import React, { useState } from 'react';
import './Order.css';

function Order() {
    const [order, setOrder] = useState({
        product: '',
        quantity: 0,
        total: 0,
    });

    const handleProductChange = (event) => {
        setOrder((prevOrder) => ({
            ...prevOrder,
            product: event.target.value,
        }));
    };

    const handleQuantityChange = (event) => {
        const quantity = parseInt(event.target.value, 10) || 0;
        setOrder((prevOrder) => ({
            ...prevOrder,
            quantity,
            total: quantity * 10, // Assuming each product costs $10
        }));
    };

    return (
        <div className="order-page">
            <h1>Order Page</h1>
            <form>
                <label htmlFor="product">Product:</label>
                <input
                    type="text"
                    id="product"
                    value={order.product}
                    onChange={handleProductChange}
                />

                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={order.quantity}
                    onChange={handleQuantityChange}
                />

                <p>Total: ${order.total}</p>

                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default Order;
