import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const HeaderContainer = styled.header`
  background-color: white;
  padding: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
  
  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    color: var(--text-color);
    
    span {
      color: var(--primary-color);
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 1000;
  }
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  color: var(--text-color);
  font-weight: 500;
  padding: 5px 0;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover, &.active {
    color: var(--primary-color);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: all 0.3s ease;
  }
  
  &:hover::after, &.active::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const DownloadButton = styled(Link)`
  background-color: var(--primary-color);
  color: white;
  padding: 10px 25px;
  border-radius: 8px;
  font-weight: 500;
  margin-left: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0095D9;
    color: white;
  }
  
  @media (max-width: 768px) {
    margin: 15px 0 0 0;
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  div {
    width: 25px;
    height: 3px;
    background-color: var(--text-color);
    margin: 5px 0;
    transition: all 0.3s ease;
    
    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'};
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    // Only handle scrolling if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <HeaderContainer style={{ boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none' }}>
      <NavContainer>
        <Logo>
          <img src={logo} alt="MindMentor Logo" />
          <h1>Mind<span>Mentor</span></h1>
        </Logo>
        
        <MenuToggle isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </MenuToggle>
        
        <Nav isOpen={isMenuOpen}>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/" onClick={() => scrollToSection('about')}>
            About
          </NavLink>
          <NavLink to="/" onClick={() => scrollToSection('features')}>
            Features
          </NavLink>
          <NavLink to="/" onClick={() => scrollToSection('package-list')}>
            Pricing
          </NavLink>
          <NavLink to="/" onClick={() => scrollToSection('feedback')}>
            Feedback
          </NavLink>
          <DownloadButton to="/download">Download</DownloadButton>
        </Nav>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 