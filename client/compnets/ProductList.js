import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      description: 'Description of Product 1',
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
