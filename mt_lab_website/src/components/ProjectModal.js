import React from 'react';
import Modal from 'react-modal';
import YouTubeLink from './YouTubeLink';

Modal.setAppElement("#root");
export const ProjectModal = (props) => (
    <Modal 
        className="project-modal"
        isOpen={props.showModal}
        onRequestClose={props.onRequestClose}
        closeTimeoutMS={200}
    >
        <h2>{props.data.title}</h2>
        <YouTubeLink videoId={props.video}/>
    </Modal>
);

export default ProjectModal;