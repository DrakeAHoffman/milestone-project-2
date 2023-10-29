import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Apple MacBook Pro',
      price: 4000.00,
      description: ''
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      description: 'Description of Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      description: 'Description of Product 3',
    },
    {
      id: 4,
      name: 'Apple AirPods Pro',
      price: 249.99,
      description: "AirPods Pro are wireless Bluetooth in-ear headphones designed by Apple, initially introduced on October 30, 2019. They are Apple's mid-range wireless headphones, they are available alongside the base-level AirPods and the highest-end AirPods Max.",
    },
  ];

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
