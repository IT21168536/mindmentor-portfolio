import React from 'react';
import styled from 'styled-components';
import { FaApple, FaAndroid, } from 'react-icons/fa';
import appScreenshot from '../assets/images/student-interface.jpg';

const DownloadSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  color: white;
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

const DownloadContainer = styled.div`
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

const ContentColumn = styled.div`
  flex: 1;
  padding-right: 50px;
  
  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 40px;
  }
  
  h2 {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 20px;
  }
  
  p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 30px;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    width: 70%;
    
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const DownloadButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  background-color: white;
  color: var(--text-color);
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background-color: var(--text-color);
    color: white;
  }
  
  svg {
    font-size: 24px;
    margin-right: 10px;
  }
`;

const DownloadApp = () => {
  return (
    <DownloadSection id="download">
      <DownloadContainer>
        <ContentColumn>
          <h2>Download Our App</h2>
          <p>
            Get the MindMentor app on your device and start enhancing your academic performance and mental wellness today. Available on multiple platforms for your convenience.
          </p>
          
          <DownloadButtons>
            <DownloadButton href="#">
              <FaApple /> iOS App
            </DownloadButton>
            <DownloadButton href="#">
              <FaAndroid /> Android App
            </DownloadButton>

          </DownloadButtons>
        </ContentColumn>
        
        <ImageColumn>
          <img src={appScreenshot} alt="MindMentor App Screenshot" />
        </ImageColumn>
      </DownloadContainer>
    </DownloadSection>
  );
};

export default DownloadApp; 