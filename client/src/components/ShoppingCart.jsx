import React, { useState, useEffect } from "react";
import axios from "axios";

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3003";

    useEffect(() => {
        // Get data from server
        axios
            .get(`${API_URL}/cart`)
            .then((response) => {
                setCartItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} {item.quantity}x
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
