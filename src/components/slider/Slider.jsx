import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider.css';

const images = [
  'ss1.jpeg',
  'ss2.jpeg',
  'ss3.jpeg',

  // Add more image URLs as needed
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container">
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Slider;
