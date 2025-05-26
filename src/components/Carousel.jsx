import React, { useRef, useEffect } from 'react';
import './Carousel.css';

// Import images from assets folder
import dashboardView from '../assets/images/dashboard-view.jpg';
import studentInterface from '../assets/images/student-interface.jpg';
import doctorRecommendation from '../assets/images/doctor-recommendation.jpg';
import studyPlan from '../assets/images/study-plan.jpg';
import academicForm from '../assets/images/academic-form.jpg';
import musicPlaylist from '../assets/images/music-playlist.jpg';
import profile from '../assets/images/profile.jpg';
import setting from '../assets/images/setting.jpg';

// Image mapping object
const imageMap = {
  'dashboard-view.jpg': dashboardView,
  'student-interface.jpg': studentInterface,
  'doctor-recommendation.jpg': doctorRecommendation,
  'study-plan.jpg': studyPlan,
  'academic-form.jpg': academicForm,
  'music-playlist.jpg': musicPlaylist,
  'profile.jpg': profile,
  'setting.jpg': setting
};

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);
  
  useEffect(() => {
    // Auto-scroll the carousel every 5 seconds
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollAmount = carouselRef.current.scrollLeft + 320; // Width of image + gap
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        
        if (scrollAmount >= maxScroll) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <img 
            key={index}
            src={imageMap[image.filename] || studentInterface} // Fallback to studentInterface if image not found
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 