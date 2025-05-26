import React from 'react';
import Hero from '../components/Hero';
import AboutApp from '../components/AboutApp';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import DownloadApp from '../components/DownloadApp';
import Stats from '../components/Stats';
import Carousel from '../components/Carousel';
import Feedback from '../components/Feedback';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  h2 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 15px;
  }
  
  p {
    color: var(--light-text);
    max-width: 700px;
    margin: 0 auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Home = () => {
  const uiImages = [
    {
      filename: "dashboard-view.jpg",
      alt: "Dashboard View (Emotion + Noise + Behavior Alerts)"
    },
    {
      filename: "student-interface.jpg",
      alt: "Student Interface with Study Planner & Music Playlist"
    },
    {
      filename: "doctor-recommendation.jpg",
      alt: "Doctor Recommendation List"
    },
    {
      filename: "study-plan.jpg",
      alt: "Study Plan Interface"
    },
    {
      filename: "music-playlist.jpg",
      alt: "AI Music Playlist Generator"
    }
  ];

  return (
    <>
      <Hero />
      <AboutApp />
      <Features />
      <Stats />
      
      <SectionContainer id="ui-showcase">
        <Container>
          <SectionTitle>
            <h2>How Can We Help You with MindMentor</h2>
            <p>Explore the intuitive and user-friendly interface of MindMentor, designed to make your academic journey seamless and stress-free.</p>
          </SectionTitle>
          <Carousel images={uiImages} />
        </Container>
      </SectionContainer>
      
      <Pricing />
      <DownloadApp />
      <Feedback />
    </>
  );
};

export default Home; 