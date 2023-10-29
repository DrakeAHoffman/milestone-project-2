import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Apple MacBook Pro 16 inch',
      price: 4000.00,
      description: 'Design: The 16-inch MacBook Pro is larger and more powerful than the 13-inch model. It has a premium and sturdy build with a larger display. It is also available in Silver and Space Gray colors.Display: The 16-inch model features a Retina display with a resolution of 3072 x 1920 pixels. It offers excellent color accuracy and is ideal for creative professionals.Performance: The 16-inch MacBook Pro is equipped with Intel processors, and as of my last knowledge update, it had not transitioned to the Apple M1 chip. It offers high performance for demanding tasks.Keyboard: It features a scissor-switch keyboard, which is more reliable than the previous Butterfly keyboard.Battery Life: The 16-inch MacBook Pro provides a reasonable battery life given its larger and more power-hungry components.Audio: It boasts a six-speaker sound system with force-canceling woofers, delivering impressive audio quality.Ports: The 16-inch MacBook Pro includes a variety of ports, including multiple Thunderbolt 3 (USB-C) ports, an HDMI port, and an SD Card slot.Operating System: Like the 13-inch model, it runs macOS and supports a wide range of professional applications.'
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
