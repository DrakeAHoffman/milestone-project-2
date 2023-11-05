import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BuyNow.css'



const BuyNow = ({ name, price, quantity}) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    const purchaseData = {
    name: name,
    price: price,
    quantity: quantity,
    };

    axios.post('http://localhost:3003/cart', purchaseData)
      .then(response => {
        console.log(response.data);

       navigate('/cart')
      
      })
      .catch(error => {
        console.error(error); // Handle any errors
      });
  };

  return (
    <div>
       <button className= "button" onClick={handleBuyNow}> Buy Now </button>
      
    </div>
  );
};

export default BuyNow;


