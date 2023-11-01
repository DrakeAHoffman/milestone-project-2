import React from 'react';
import './MacBookPage.css'; // Import the CSS for styling
import Rating from './Rating'

import appleImage from './13_inch.jpeg'
import appleImage2 from './16_inch.jpeg'
import CommentSection from './Comments';


const MacBookPage = () => {
  return (
    <div className="macbook-page">
      <h1>MacBook Page</h1>
      <p>Explore the world of MacBook laptops.</p>

      <div className="macbook-model">

      <div>
        {/* Include the image using the <img> element */}
        <img src={appleImage} alt="Apple" className="apple-image" />
      </div>
      
        <h2>Apple MacBook Pro 13-inch</h2>
        <p>Display: 13-inch Retina display</p>
        <p>Processor: Apple M1 chip</p>
        <p>Price: $1,299</p>
        <p>Design: The 13-inch MacBook Pro features a compact and portable design, making it an excellent choice for professionals and students on the go. It is available in Silver and Space Gray colors.

Display: The 13-inch model offers a Retina display with excellent color accuracy and brightness. It has a resolution of 2560 x 1600 pixels, providing sharp and vibrant visuals.

Performance: The 13-inch MacBook Pro is powered by Apple's custom M1 or Intel processors (depending on the model). The M1 chip, in particular, offers exceptional performance and energy efficiency.

Battery Life: The M1-powered models are known for their impressive battery life, providing all-day usage on a single charge.

Keyboard: It features Apple's Magic Keyboard, which provides a comfortable and tactile typing experience. This keyboard replaced the previous-generation Butterfly keyboard, which had reliability issues.

Ports: The 13-inch MacBook Pro includes a variety of ports, including Thunderbolt 3 (USB-C) ports for data transfer, charging, and connecting external displays.

Audio: It boasts high-quality speakers, producing rich and clear sound. The laptop also features a 3.5mm headphone jack.

Operating System: It runs macOS, Apple's desktop operating system, and is compatible with a wide range of professional software.</p>
        <Rating stars={3}></Rating>
        <CommentSection/>
        <a href="#buy-macbook-13" className="macbook-button">Buy Now</a>
      </div>

      <div className="macbook-model">

      <div>
        {/* Include the image using the <img> element */}
        <img src={appleImage2} alt="Apple" className="apple-image" />
      </div>

        <h2>Apple MacBook Pro 16-inch</h2>
        <p>Display: 16-inch Retina display</p>
        <p>Processor: Intel Core i9</p>
        <p>Price: $2,399</p>
        <p>Design: The 16-inch MacBook Pro is larger and more powerful than the 13-inch model. It has a premium and sturdy build with a larger display. It is also available in Silver and Space Gray colors.

Display: The 16-inch model features a Retina display with a resolution of 3072 x 1920 pixels. It offers excellent color accuracy and is ideal for creative professionals.

Performance: The 16-inch MacBook Pro is equipped with Intel processors, and as of my last knowledge update, it had not transitioned to the Apple M1 chip. It offers high performance for demanding tasks.

Keyboard: It features a scissor-switch keyboard, which is more reliable than the previous Butterfly keyboard.

Battery Life: The 16-inch MacBook Pro provides a reasonable battery life given its larger and more power-hungry components.

Audio: It boasts a six-speaker sound system with force-canceling woofers, delivering impressive audio quality.

Ports: The 16-inch MacBook Pro includes a variety of ports, including multiple Thunderbolt 3 (USB-C) ports, an HDMI port, and an SD Card slot.

Operating System: Like the 13-inch model, it runs macOS and supports a wide range of professional applications.</p>
        <Rating stars={2}></Rating>
        <CommentSection/>
        <a href="#buy-macbook-16" className="macbook-button">Buy Now</a>
      </div>
    </div>
  );
};

export default MacBookPage;

