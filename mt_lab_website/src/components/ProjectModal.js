import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");
export const ProjectModal = (props) => (
    <div className="project-modal">
        <p>PROJECT {props.id}</p>
    </div>
);

export default ProjectModal;