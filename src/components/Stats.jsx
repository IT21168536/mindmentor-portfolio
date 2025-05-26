import React from 'react';
import styled from 'styled-components';

const StatsSection = styled.section`
  padding: 70px 0;
  background-color: var(--section-bg);
  border-top: 1px solid var(--secondary-color);
  border-bottom: 1px solid var(--secondary-color);
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const StatItem = styled.div`
  text-align: center;
  flex: 1;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    flex-basis: 50%;
    margin-bottom: 30px;
  }
  
  @media (max-width: 576px) {
    flex-basis: 100%;
  }
  
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 10px;
  }
  
  p {
    color: var(--light-text);
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Stats = () => {
  const statsData = [
    {

    },
    {

    },
    {

    },
    {

    }
  ];

  return (
    <StatsSection>
      <StatsContainer>
        {statsData.map((stat, index) => (
          <StatItem key={index}>
            <h3>{stat.count}</h3>
            <p>{stat.label}</p>
          </StatItem>
        ))}
      </StatsContainer>
    </StatsSection>
  );
};

export default Stats;