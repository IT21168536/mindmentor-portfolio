import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

const PricingSection = styled.section`
  padding: 100px 0;
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

const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PricingCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 40px 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  flex: 1;
  max-width: 350px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  ${props => props.featured && `
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    border: 2px solid var(--primary-color);
    
    &::before {
      content: 'Most Popular';
      position: absolute;
      top: 15px;
      right: -30px;
      transform: rotate(45deg);
      background-color: var(--primary-color);
      color: white;
      padding: 5px 40px;
      font-size: 0.8rem;
      font-weight: 600;
    }
    
    @media (max-width: 992px) {
      transform: scale(1);
      margin: 20px 0;
    }
  `}
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 992px) {
    width: 100%;
    max-width: 400px;
    margin-bottom: 30px;
  }
`;

const PricingHeader = styled.div`
  margin-bottom: 30px;
  
  h3 {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const Price = styled.div`
  font-size: 3rem;
  color: var(--text-color);
  margin-bottom: 20px;
  font-weight: 700;
  
  span {
    font-size: 1rem;
    color: var(--light-text);
    font-weight: 400;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  text-align: left;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: var(--light-text);
  
  svg {
    color: var(--primary-color);
    margin-right: 10px;
    flex-shrink: 0;
  }
`;

const ActionButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: ${props => props.featured ? 'var(--primary-color)' : 'white'};
  color: ${props => props.featured ? 'white' : 'var(--primary-color)'};
  border: 1px solid var(--primary-color);
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const Pricing = () => {
  const pricingData = [
    {
      title: "Basic Plan",
      price: "Rs 100",
      period: "per Month",
      features: [
        "Emotion recognition",
        "1 weekly study plan",
        "Music mood matching",
        "Basic analytics",
        "Email support"
      ],
      buttonText: "Get Started",
      featured: false
    },
    {
      title: "Premium",
      price: "Rs 350",
      period: "per Month",
      features: [
        "All Basic features",
        "Doctor recommendation",
        "Live dashboard alerts",
        "Advanced analytics",
        "Priority support"
      ],
      buttonText: "Get Started",
      featured: true
    },
    {
      title: "Standard",
      price: "Rs 500",
      period: "per Month",
      features: [
        "All Premium features",
        "Unlimited usage",
        "Institutional analytics",
        "Admin tools",
        "24/7 dedicated support"
      ],
      buttonText: "Get Started",
      featured: false
    }
  ];

  return (
    <PricingSection id="package-list">
      <SectionTitle>
        <h2>Price Plan</h2>
        <p>Choose the plan that best fits your needs and start enhancing your learning experience today.</p>
      </SectionTitle>
      
      <PricingContainer>
        {pricingData.map((plan, index) => (
          <PricingCard key={index} featured={plan.featured}>
            <PricingHeader>
              <h3>{plan.title}</h3>
            </PricingHeader>
            <Price>
              {plan.price} <span>{plan.period}</span>
            </Price>
            <FeaturesList>
              {plan.features.map((feature, idx) => (
                <Feature key={idx}>
                  <FaCheck /> {feature}
                </Feature>
              ))}
            </FeaturesList>
            <ActionButton href="#" featured={plan.featured}>
              {plan.buttonText}
            </ActionButton>
          </PricingCard>
        ))}
      </PricingContainer>
    </PricingSection>
  );
};

export default Pricing; 