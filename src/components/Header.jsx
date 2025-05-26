import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // Only handle scrolling if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header>
      <h1>MindMentor</h1>
      <nav>
        <Link to="/" onClick={() => scrollToSection('about')}>About</Link>
        <Link to="/" onClick={() => scrollToSection('features')}>Features</Link>
        <Link to="/" onClick={() => scrollToSection('technology')}>Technology</Link>
        <Link to="/" onClick={() => scrollToSection('who-can-use')}>Who Can Use</Link>
        <Link to="/" onClick={() => scrollToSection('who-should-use')}>Who Should Use</Link>
        <Link to="/" onClick={() => scrollToSection('package-list')}>Packages</Link>
        <Link to="/" onClick={() => scrollToSection('ui-showcase')}>UI Showcase</Link>
        <Link to="/" onClick={() => scrollToSection('feedback')}>Feedback</Link>
        <Link to="/download">Download</Link>
      </nav>
    </header>
  );
};

export default Header; 