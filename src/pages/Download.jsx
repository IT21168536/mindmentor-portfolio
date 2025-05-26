import React from 'react';
import Section from '../components/Section';
import DownloadButtons from '../components/DownloadButtons';

const Download = () => {
  return (
    <div className="container">
      <Section id="app-download" title="Download MindMentor">
        <p>Get started with MindMentor today! Choose to try our app for free with a trial, or view download options for Android and iOS.</p>
        <DownloadButtons />
      </Section>
    </div>
  );
};

export default Download; 