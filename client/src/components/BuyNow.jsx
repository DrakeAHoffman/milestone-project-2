import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const BuyNow = () => {
  const history = useHistory();

  const handleBuyNow = () => {
    const purchaseData = {
      product: 'Your Product Name',
      price: 99.99, 
    };

    axios.post('http://localhost:3000/buy-now', purchaseData)
      .then(response => {
        console.log(response.data);

       
        if (response.data.message === 'Purchase successful') {
         
          history.push('/success-page');
        }
      })
      .catch(error => {
        console.error(error); // Handle any errors
      });
  };

  return (
    <div>
      <h1>Buy Now</h1>
      <button onClick={handleBuyNow}>Buy Now</button>
      <Link to="/success-page">Success Page</Link> {/* A link to the success page */}
    </div>
  );
};

export default BuyNow;


