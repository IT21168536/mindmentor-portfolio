import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import appScreenshot from '../assets/images/dashboard-view.jpg';
// Use a fallback image in case the actual image is not available
// import appScreenshot from '../assets/images/app-screenshot.png';

const AboutSection = styled.section`
  padding: 100px 0;
  background-color: white;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContentColumn = styled.div`
  flex: 1;
  padding-right: 50px;
  
  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 40px;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Description = styled.p`
  color: var(--light-text);
  margin-bottom: 30px;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  
  svg {
    color: var(--primary-color);
    margin-right: 15px;
    font-size: 20px;
    margin-top: 3px;
    flex-shrink: 0;
  }
`;

const FeatureText = styled.div`
  h4 {
    color: var(--text-color);
    margin-bottom: 5px;
    font-size: 1.2rem;
  }
  
  p {
    color: var(--light-text);
    margin: 0;
  }
`;

// Placeholder image for development
const placeholderImage = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20600%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e2ea3d7e8%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e2ea3d7e8%22%3E%3Crect%20width%3D%22400%22%20height%3D%22600%22%20fill%3D%22%23e74c3c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22120%22%20y%3D%22300%22%3EMindMentor%20App%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

const AboutApp = () => {
  const features = [
    {
      title: "User Friendly",
      description: "Intuitive interface designed for students of all ages and technical abilities."
    },
    {
      title: "Fully Functional",
      description: "Complete suite of tools for academic performance enhancement and mental wellness support."
    },
    {
      title: "24hrs Chat Support",
      description: "Around-the-clock assistance from our dedicated support team for any questions or issues."
    },
    {
      title: "Download Anywhere",
      description: "Available on iOS, Android, and as a web application for seamless access across all devices."
    }
  ];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <ContentColumn>
          <SectionTitle>MindMentor Makes Your Life Easy</SectionTitle>
          <Description>
            MindMentor is an all-in-one AI-powered solution designed to support students' academic performance and mental wellness. By combining real-time emotional monitoring, academic performance prediction, smart doctor recommendations, and personalized music therapy.
          </Description>
          
          <FeaturesList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FaCheckCircle />
                <FeatureText>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </FeatureText>
              </FeatureItem>
            ))}
          </FeaturesList>
        </ContentColumn>
        
        <ImageColumn>
          <img src={appScreenshot} alt="MindMentor App Screenshot" />
        </ImageColumn>
      </AboutContainer>
    </AboutSection>
  );
};

export default AboutApp; 