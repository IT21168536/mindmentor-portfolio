import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const FooterSection = styled.footer`
  background-color: var(--text-color);
  color: white;
  padding: 80px 0 30px;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 30px;
  padding-right: 20px;
  
  @media (max-width: 768px) {
    flex-basis: 50%;
  }
  
  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
  
  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    color: white;
    
    span {
      color: var(--primary-color);
    }
  }
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FooterTitle = styled.h3`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 2px;
    background-color: var(--primary-color);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 15px;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
    display: block;
    
    &:hover {
      color: var(--primary-color);
      padding-left: 5px;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  
  svg {
    color: var(--primary-color);
    margin-right: 10px;
    margin-top: 5px;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  margin-right: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-5px);
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 30px;
`;

const Copyright = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterColumn>
            <Logo>
              <img src={logo} alt="MindMentor Logo" />
              <h2>Mind<span>Mentor</span></h2>
            </Logo>
            <FooterText>
              MindMentor is an all-in-one AI-powered solution designed to support students' academic performance and mental wellness.
            </FooterText>
            <SocialLinks>
              <SocialIcon href="#" aria-label="Facebook">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIcon>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#home">Home</a></FooterLink>
              <FooterLink><a href="#about">About</a></FooterLink>
              <FooterLink><a href="#features">Features</a></FooterLink>
              <FooterLink><a href="#package-list">Pricing</a></FooterLink>
              <FooterLink><a href="#feedback">Feedback</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Support</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">FAQ</a></FooterLink>
              <FooterLink><a href="#">Privacy Policy</a></FooterLink>
              <FooterLink><a href="#">Terms of Service</a></FooterLink>
              <FooterLink><a href="#">Documentation</a></FooterLink>
              <FooterLink><a href="#">Contact Us</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Contact</FooterTitle>
            <ContactItem>
              <FaMapMarkerAlt />
              <p>123 Innovation Street, Tech City, CA 12345</p>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <p>+1 (123) 456-7890</p>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <p>support@mindmentor.com</p>
            </ContactItem>
          </FooterColumn>
        </FooterContent>
        
        <Divider />
        
        <Copyright>
          &copy; {new Date().getFullYear()} MindMentor. All rights reserved.
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer; 