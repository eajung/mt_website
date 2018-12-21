import React from 'react';
import ProjectModal from './ProjectModal';

export const App = () => (
  <div className="project-container">
    <ProjectModal id={1}/>
    <ProjectModal id={2}/>
    <ProjectModal id={3}/>
    <ProjectModal id={4}/>
  </div>
);

export default App;
