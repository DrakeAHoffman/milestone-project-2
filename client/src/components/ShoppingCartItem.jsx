import axios from "axios";

import "./ShoppingCartItem.css";

const ShoppingCartItem = ({ item, refreshPage }) => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3003";

    const handleQuantityIncrease = () => {
        axios
            .patch(`${API_URL}/cart/${item.id}`, { quantity: item.quantity + 1 })
            .then((response) => {
                refreshPage();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleQuantityDecrease = () => {
        if (item.quantity == 1) {
            handleDelete();
        } else {
            axios
                .patch(`${API_URL}/cart/${item.id}`, { quantity: item.quantity - 1 })
                .then((response) => {
                    refreshPage();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleDelete = () => {
        axios
            .delete(`${API_URL}/cart/${item.id}`)
            .then((response) => {
                refreshPage();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <li key={item.id} className="cart-item">
            <span className="item-name">{item.name}</span>
            <span className="item-details">
                <span className="item-price">${item.price}</span>
                <span className="item-quantity">{item.quantity}x</span>
                <button onClick={handleQuantityIncrease} className="quantity-increase">
                    +
                </button>
                <button onClick={handleQuantityDecrease} className="quantity-decrease">
                    -
                </button>
            </span>
            <button onClick={handleDelete} className="item-remove">
                &times;
            </button>
        </li>
    );
};

export default ShoppingCartItem;
