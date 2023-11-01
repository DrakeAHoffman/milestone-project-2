import React from 'react';
import './MacBookPage.css'; // Import the CSS for styling
import Rating from './Rating'

const data = [
  {
    name: "Apple MacBook Pro 13-inch",
    display: "13-inch Retina display",
    processor: "Apple M1 chip",
    price: "$1,299",
    design: "The 16-inch MacBook Pro is larger and more powerful"
  },
  {}
]

const MacBookPage = () => {
  return (
    <div className="macbook-page">
      <h1>MacBook Page</h1>
      <p>Explore the world of MacBook laptops.</p>
      {data.array.forEach(element => {
          <div className="macbook-model">
      
          <h2>{Element.name}</h2>
          <p>Display: {Element.display}</p>
          <p>Processor: {Element.processor}</p>
          <p>Price: {Element.price}</p>
          <p>Design: {Element.design}</p>
          </div>
      })};
    </div>
  );
};

export default MacBookPage;

