import React, { useRef, useEffect } from 'react';
import './Carousel.css';

// Import placeholder images
import dashboardImg from '../assets/images/dashboard-view.jpg';
import studentInterfaceImg from '../assets/images/student-interface.jpg';
import doctorRecommendationImg from '../assets/images/doctor-recommendation.jpg';
import liveMonitoringImg from '../assets/images/live-monitoring.jpg';

// Image mapping object
const imageMap = {
  'dashboard-view.jpg': dashboardImg,
  'student-interface.jpg': studentInterfaceImg,
  'doctor-recommendation.jpg': doctorRecommendationImg,
  'live-monitoring.jpg': liveMonitoringImg
};

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Auto-scroll function
    const autoScroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        // If we're at the end, go back to the beginning
        carousel.scrollLeft = 0;
      } else {
        // Otherwise, scroll right
        carousel.scrollLeft += 270; // Same as the scroll amount in the original function
      }
    };

    // Set up auto-scroll interval
    const intervalId = setInterval(autoScroll, 2000); // Auto-scroll every 2 seconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Fallback image for development
  const fallbackImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22250%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20250%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e2ea3d7e8%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e2ea3d7e8%22%3E%3Crect%20width%3D%22250%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2292.5%22%20y%3D%2296.3%22%3EMindMentor%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <img 
            key={index} 
            src={imageMap[image.filename] || fallbackImage} 
            alt={image.alt} 
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 