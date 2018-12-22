import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement("#root");
export const ProjectModal = (props) => (
    <Modal 
        className="project-modal"
        isOpen={props.showModal}
        onRequestClose={props.onRequestClose}
        closeTimeoutMS={200}
    >
        <p>CATEGORY {props.id}</p>
    </Modal>
);

export default ProjectModal;