import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaHeartbeat, FaVideo, FaMusic, FaChartBar, FaShieldAlt } from 'react-icons/fa';

const FeaturesSection = styled.section`
  padding: 100px 0;
  background-color: var(--section-bg);
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 20px;
  }
  
  p {
    color: var(--light-text);
    max-width: 700px;
    margin: 0 auto;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
  font-size: 28px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  color: var(--light-text);
  line-height: 1.6;
`;

const Features = () => {
  const featuresData = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Performance Predictor",
      description: "Analyze study patterns, attendance, grades, and stress to generate adaptive, personalized study plans."
    },
    {
      icon: <FaHeartbeat />,
      title: "Smart Mental Health Triage",
      description: "Classifies student stress levels using DASS-21 inputs and recommends nearby mental health professionals based on severity and location."
    },
    {
      icon: <FaVideo />,
      title: "Real-Time Emotion & Behavior Monitoring",
      description: "Uses facial recognition, pose tracking, and environmental audio analysis to detect stress, disengagement, or disruptive classroom activity in real time."
    },
    {
      icon: <FaMusic />,
      title: "AI-Powered Music Recommender",
      description: "Delivers mood-matching music playlists based on detected or self-reported emotions—helping students focus, relax, or re-energize."
    },
    {
      icon: <FaChartBar />,
      title: "Insightful Dashboards",
      description: "For teachers and administrators to view behavioral trends, stress alerts, and performance risk flags in a privacy-respecting format."
    },
    {
      icon: <FaShieldAlt />,
      title: "Privacy-Focused Design",
      description: "All sensitive data is anonymized, processed locally, and never stored without consent."
    }
  ];

  return (
    <FeaturesSection id="features">
      <SectionTitle>
        <h2>Powerful Features</h2>
        <p>MindMentor offers a comprehensive suite of tools designed to enhance academic performance and support mental wellness.</p>
      </SectionTitle>
      
      <FeaturesGrid>
        {featuresData.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>
              {feature.icon}
            </FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default Features; 