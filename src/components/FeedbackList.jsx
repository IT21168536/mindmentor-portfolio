import React from 'react';
import './FeedbackList.css';

const FeedbackList = () => {
  // This would typically come from an API or state management
  const feedbacks = [
    {
      id: 1,
      name: 'Amal Perera',
      message: 'MindMentor has been a game-changer for my A/L studies! The study planner and stress management features are incredibly helpful.',
      date: 'May 25, 2025'
    },
    {
      id: 2,
      name: 'Nimali Silva',
      message: 'I love the music playlists! They help me relax after a long day of studying. Great app!',
      date: 'May 24, 2025'
    },
    {
      id: 3,
      name: 'Kasun Fernando',
      message: 'The emotion analysis feature is unique and motivating. I\'d love to see more customization options in the future.',
      date: 'May 23, 2025'
    }
  ];

  return (
    <div className="feedback-list">
      {feedbacks.map(feedback => (
        <div key={feedback.id} className="feedback-item">
          <h4>{feedback.name}</h4>
          <p>{feedback.message}</p>
          <small>Posted on {feedback.date}</small>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList; 