import React, { useState, useEffect } from "react";
import axios from "axios";
import ShoppingCartItem from "./ShoppingCartItem";
import "./ShoppingCart.css";

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3003";

    const loadShoppingCartItems = () => {
        axios
            .get(`${API_URL}/cart`)
            .then((response) => {
                setCartItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(loadShoppingCartItems, []);

    return (
        <div className="shopping-cart">
            <h2 className="cart-heading">Shopping Cart</h2>
            <ul className="cart-list">
                {cartItems.map((item) => (
                    <ShoppingCartItem item={item} refreshPage={loadShoppingCartItems} />
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
