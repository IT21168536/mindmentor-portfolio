import React, { useRef } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 270; // Adjust based on image width + gap
      if (direction === 'left') {
        carouselRef.current.scrollLeft -= scrollAmount;
      } else {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image.src} 
            alt={image.alt} 
          />
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={() => scrollCarousel('left')}>Previous</button>
        <button onClick={() => scrollCarousel('right')}>Next</button>
      </div>
    </div>
  );
};

export default Carousel; 