import React, { useState } from 'react';
import styled from 'styled-components';

const FeedbackSection = styled.section`
  padding: 100px 0;
  background-color: white;
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

const FeedbackContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const FormColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const TestimonialsColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const FeedbackForm = styled.form`
  background-color: var(--section-bg);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    color: var(--text-color);
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-color);
  }
  
  input, textarea, select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid var(--secondary-color);
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(0, 174, 239, 0.2);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
  
  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%231F2A44' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: calc(100% - 15px) center;
    padding-right: 40px;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0095D9;
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  border-left: 4px solid var(--primary-color);
  
  p {
    color: var(--light-text);
    font-style: italic;
    margin-bottom: 20px;
    position: relative;
    
    &::before {
      content: '"';
      font-size: 4rem;
      color: rgba(0, 174, 239, 0.1);
      position: absolute;
      top: -20px;
      left: -10px;
      z-index: -1;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--section-bg);
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--primary-color);
`;

const UserDetails = styled.div`
  h4 {
    color: var(--text-color);
    margin: 0 0 5px;
    font-size: 1.1rem;
  }
  
  p {
    color: var(--light-text);
    margin: 0;
    font-style: normal;
    font-size: 0.9rem;
  }
`;

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  const testimonials = [
    {
      text: "MindMentor has completely transformed my academic experience. The personalized study plans and emotional support have helped me improve my grades while maintaining my mental health.",
      name: "chathura lakshan",
      role: "A/L Student"
    },
    {
      text: "As a teacher, I've seen remarkable improvements in my students since implementing MindMentor in our classroom. The insights from the dashboard help me identify struggling students early.",
      name: "tharani kumari",
      role: "A/L Student"
    },
    {
      text: "The mental health triage feature recommended a therapist when I was struggling, and it made all the difference. This app truly cares about students' wellbeing.",
      name: "thejani hansika",
      role: "A/L Student"
    }
  ];
  
  return (
    <FeedbackSection id="feedback">
      <SectionTitle>
        <h2>Feedback & Testimonials</h2>
        <p>Hear what our users have to say and share your own experience with MindMentor.</p>
      </SectionTitle>
      
      <FeedbackContainer>
        <FormColumn>
          <FeedbackForm onSubmit={handleSubmit}>
            <h3>Send Us Your Feedback</h3>
            
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <select 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Feedback</option>
                <option value="bug">Report a Bug</option>
                <option value="feature">Feature Request</option>
                <option value="support">Support</option>
              </select>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </FormGroup>
            
            <SubmitButton type="submit">Submit Feedback</SubmitButton>
          </FeedbackForm>
        </FormColumn>
        
        <TestimonialsColumn>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <p>{testimonial.text}</p>
              <UserInfo>
                <UserAvatar>
                  {testimonial.name.charAt(0)}
                </UserAvatar>
                <UserDetails>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </UserDetails>
              </UserInfo>
            </TestimonialCard>
          ))}
        </TestimonialsColumn>
      </FeedbackContainer>
    </FeedbackSection>
  );
};

export default Feedback; 