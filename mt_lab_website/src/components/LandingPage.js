import React from 'react';
import ProjectModal from './ProjectModal';

export const LandingPage = () => (
  <div className="content-container">
    <div className="introduction">
      <h1>Welcome to MT Lab</h1>
      <h3>...where pigs <i>can</i> fly.</h3>
    </div>
    <div className="project-container">
      <ProjectModal id={1}/>
      <ProjectModal id={2}/>
      <ProjectModal id={3}/>
      <ProjectModal id={4}/>
    </div>
  </div>
);

export default LandingPage;
