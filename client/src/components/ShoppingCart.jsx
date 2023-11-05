import React, { useState, useEffect } from "react";
import axios from "axios";
import './ShoppingCart.css'

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3003";

    useEffect(() => {
       
        axios
            .get(`${API_URL}/cart`)
            .then((response) => {
                setCartItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [API_URL]);

    return (
        <div className="shopping-cart">
            <h2 className="cart-heading">Shopping Cart</h2>
            <ul className="cart-list">
                {cartItems.map((item) => (
                    <li key={item.id} className="cart-item">
                        <span className="item-name">{item.name}</span>
                        <span className="item-details">
                            <span className="item-price">${item.price}</span>
                            <span className="item-quantity">{item.quantity}x</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart; 