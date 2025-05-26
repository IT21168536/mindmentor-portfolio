import React from 'react';
import styled from 'styled-components';
import { FaGooglePlay, FaApple, FaDesktop } from 'react-icons/fa';
import appScreenshot from '../assets/images/student-interface.jpg';

const PageContainer = styled.div`
  padding-top: 60px;
`;


const DownloadSection = styled.section`
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: var(--text-color);
`;




const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: var(--primary-color);
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0095D9;
  }
  
  svg {
    margin-right: 10px;
  }
`;

const MobileAppsSection = styled.section`
  background-color: var(--section-bg);
  padding: 80px 0;
`;

const MobileAppsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const MobileAppsContent = styled.div`
  flex: 1;
`;

const MobileAppsImage = styled.div`
  flex: 1;
  
  img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const AppStoreButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const AppStoreButton = styled.a`
  display: flex;
  align-items: center;
  background-color: var(--text-color);
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0095D9;
    transform: translateY(-3px);
  }
  
  svg {
    font-size: 24px;
    margin-right: 10px;
  }
  
  div {
    text-align: left;
  }
  
  span {
    display: block;
    
    &:first-child {
      font-size: 0.8rem;
      opacity: 0.8;
    }
    
    &:last-child {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;

const Download = () => {
  return (
    <PageContainer>
      
      <MobileAppsSection>
        <Container>
          <MobileAppsContainer>
            <MobileAppsContent>
              <SectionTitle>Mobile Apps</SectionTitle>
              <p>Take MindMentor with you on the go. Our mobile apps offer the same powerful features in a pocket-sized format.</p>
              
              <AppStoreButtons>
                <AppStoreButton href="#">
                  <FaGooglePlay />
                  <div>
                    <span>Get it on</span>
                    <span>Google Play</span>
                  </div>
                </AppStoreButton>
                
                <AppStoreButton href="#">
                  <FaApple />
                  <div>
                    <span>Download on the</span>
                    <span>App Store</span>
                  </div>
                </AppStoreButton>
              </AppStoreButtons>
            </MobileAppsContent>
            
            <MobileAppsImage>
              <img src={appScreenshot} alt="MindMentor Mobile App" />
            </MobileAppsImage>
          </MobileAppsContainer>
        </Container>
      </MobileAppsSection>
      
      <DownloadSection>
        <Container>
          <SectionTitle>Web Application</SectionTitle>
          <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--light-text)' }}>
            Don't want to install anything? Use MindMentor directly in your browser with our web application.
          </p>
          
          <div style={{ textAlign: 'center' }}>
            <DownloadButton href="#">
              <FaDesktop /> Launch Web App
            </DownloadButton>
          </div>
        </Container>
      </DownloadSection>
    </PageContainer>
  );
};

export default Download; 