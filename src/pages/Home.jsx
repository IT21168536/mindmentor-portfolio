import React from 'react';
import Section from '../components/Section';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackList from '../components/FeedbackList';
import Carousel from '../components/Carousel';

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
      filename: "live-monitoring.jpg",
      alt: "Live Monitoring Panel with Face + Sound Input Preview"
    }
  ];

  return (
    <div className="container">
      <Section id="about" title="About the App">
        <p>MindMentor is an all-in-one AI-powered solution designed to support students' academic performance and mental wellness. By combining real-time emotional monitoring, academic performance prediction, smart doctor recommendations, and personalized music therapy, MindMentor creates a holistic ecosystem where students can thrive—both mentally and academically. Whether you're a student, teacher, counselor, or school administrator, MindMentor empowers you to understand and respond to learning challenges with intelligent, data-driven tools.</p>
      </Section>

      <Section id="features" title="Features">
        <h3>🎓 Academic Performance Predictor</h3>
        <p>Analyze study patterns, attendance, grades, and stress to generate adaptive, personalized study plans.</p>

        <h3>🧑‍⚕️ Smart Mental Health Triage</h3>
        <p>Classifies student stress levels using DASS-21 inputs and recommends nearby mental health professionals (counselor, psychologist, psychiatrist) based on severity and location.</p>

        <h3>🎥 Real-Time Emotion & Behavior Monitoring</h3>
        <p>Uses facial recognition, pose tracking, and environmental audio analysis to detect stress, disengagement, or disruptive classroom activity in real time.</p>

        <h3>🎵 AI-Powered Music Recommender</h3>
        <p>Delivers mood-matching music playlists based on detected or self-reported emotions—helping students focus, relax, or re-energize.</p>

        <h3>📊 Insightful Dashboards</h3>
        <p>For teachers and administrators to view behavioral trends, stress alerts, and performance risk flags in a privacy-respecting format.</p>

        <h3>🔐 Privacy-Focused Design</h3>
        <p>All sensitive data is anonymized, processed locally, and never stored without consent.</p>
      </Section>

      <Section id="technology" title="Used Technology">
        <p>MindMentor is built using cutting-edge technologies to ensure a robust and secure experience:</p>
        <ul>
          <li><strong>Frontend:</strong> React Native, Tailwind CSS</li>
          <li><strong>Backend:</strong> Python (Flask), Firebase Firestore</li>
          <li><strong>AI/ML:</strong> TensorFlow, Scikit-learn, XGBoost, OpenCV, CRNN, LSTM</li>
          <li><strong>Audio/Video Processing:</strong> Librosa, PyAudio, OpenPose</li>
          <li><strong>Security:</strong> AES-256 encryption, JWT authentication</li>
          <li><strong>Deployment:</strong> TFLite for mobile inference, ONNX for optimization</li>
        </ul>
      </Section>

      <Section id="who-can-use" title="Who Can Use It">
        <ul>
          <li><strong>🎓 Students:</strong> To manage stress, improve focus, and get custom study plans.</li>
          <li><strong>👨‍🏫 Teachers:</strong> To monitor student engagement and receive early alerts.</li>
          <li><strong>🏫 Schools & Universities:</strong> As an institutional platform to support academic performance and student wellness.</li>
          <li><strong>🧠 Counselors & Mental Health Experts:</strong> To receive intelligent student referrals based on stress categorization.</li>
        </ul>
      </Section>

      <Section id="who-should-use" title="Who Should Use It">
        <ul>
          <li>Schools and universities aiming to adopt smart education platforms</li>
          <li>Counseling centers seeking digital mental health screening tools</li>
          <li>Parents or educators managing students with high academic pressure</li>
          <li>Ed-tech startups looking for wellness-focused plug-ins</li>
          <li>NGOs promoting mental health in low-resource academic settings</li>
        </ul>
      </Section>

      <Section id="package-list" title="Package List">
        <p>Choose the plan that best fits your needs:</p>
        <table>
          <thead>
            <tr>
              <th>Package</th>
              <th>Features Included</th>
              <th>Ideal For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Free</td>
              <td>Emotion recognition, 1 weekly study plan, music mood matching</td>
              <td>Individual students</td>
            </tr>
            <tr>
              <td>Standard</td>
              <td>All Free features + doctor recommendation, live dashboard alerts</td>
              <td>Small schools or tutoring centers</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>All features unlocked, unlimited usage, institutional analytics, admin tools</td>
              <td>Schools, universities, wellness centers</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="ui-showcase" title="Take a Closer Look at MindMentor in Action">
        <p>Explore the intuitive and user-friendly interface of MindMentor, designed to make your academic journey seamless and stress-free.</p>
        <Carousel images={uiImages} />
      </Section>

      <Section id="feedback" title="Feedback">
        <p>We value your thoughts! Share your feedback about MindMentor below, and see what others are saying.</p>
        <FeedbackForm />
        <h3>What Our Visitors Say</h3>
        <FeedbackList />
      </Section>
    </div>
  );
};

export default Home; 