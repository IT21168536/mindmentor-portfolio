import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback! It will be displayed once reviewed.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder="Your Name" 
        required 
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email (Optional):</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="Your Email" 
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="message">Your Feedback:</label>
      <textarea 
        id="message" 
        name="message" 
        rows="4" 
        placeholder="Share your thoughts..." 
        required 
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
