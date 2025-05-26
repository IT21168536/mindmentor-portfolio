import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/images/student-interface.jpg';

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  color: white;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  padding-right: 50px;
  
  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 40px;
  }
  
  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    
    @media (max-width: 992px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
    transform: perspective(800px) rotateY(-5deg);
    transition: transform 0.5s ease;
    border-radius: 20px;
    max-height: 590px;
    
    &:hover {
      transform: perspective(800px) rotateY(0);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroText>
          <h1>Smart Learning App</h1>
          <p>MindMentor is an all-in-one AI-powered solution designed to support students' academic performance and mental wellness. By combining real-time emotional 
            monitoring, academic performance prediction, smart doctor recommendations, and personalized music therapy, 
            MindMentor creates a holistic ecosystem where students can thrive—both mentally and academically. Whether you're a student, teacher, counselor, or school 
            administrator, MindMentor empowers you to understand and respond to learning challenges with intelligent, data-driven tools.</p>
        </HeroText>
        <HeroImage>
          <img src={heroImage} alt="MindMentor App" />
        </HeroImage>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 