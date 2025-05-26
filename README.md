# MindMentor Portfolio

This is the portfolio website for MindMentor, an AI-powered solution designed to support students' academic performance and mental wellness.

## Features

- Academic Performance Predictor
- Smart Mental Health Triage
- Real-Time Emotion & Behavior Monitoring
- AI-Powered Music Recommender
- Insightful Dashboards
- Privacy-Focused Design

## Technology Stack

- **Frontend:** React, React Router
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/IT21168536/mindmentor-portfolio.git
   cd mindmentor-portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Build for production:
   ```
   npm run build
   ```

## Project Structure

```
mindmentor-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/              # Placeholder for UI images
│   │   └── styles/
│   │       └── global.css       # Global styles
│   │   
│   ├── components/
│   │   ├── Header.jsx          # Navigation bar component
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Section.jsx         # Reusable section component
│   │   ├── FeedbackForm.jsx    # Feedback form component
│   │   ├── FeedbackList.jsx    # Feedback list component
│   │   ├── Carousel.jsx        # Carousel for UI showcase
│   │   └── DownloadButtons.jsx # Download buttons component
│   │   
│   ├── pages/
│   │   ├── Home.jsx            # Main page (index.html content)
│   │   └── Download.jsx        # Download page
│   │   
│   ├── App.jsx                 # Main App component with routing
│   │   
│   ├── index.jsx               # Entry point for React
│   └── index.css               # Entry point CSS
```

## Deployment

This project is deployed using GitHub Pages. To deploy:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Run `npm run build`
3. Push the changes to GitHub
4. Configure GitHub Pages to deploy from the `gh-pages` branch

## License

© 2025 MindMentor. All Rights Reserved. 