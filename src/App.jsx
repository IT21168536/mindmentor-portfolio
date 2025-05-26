import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Download from './pages/Download';
import './assets/styles/global.css';

function App() {
  // Get the basename from the current URL
  const getBasename = () => {
    const { pathname } = window.location;
    if (pathname.includes('/mindmentor-portfolio')) {
      return '/mindmentor-portfolio';
    }
    return '';
  };

  return (
    <Router basename={getBasename()}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App; 