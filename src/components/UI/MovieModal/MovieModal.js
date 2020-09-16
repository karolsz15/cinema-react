import React from 'react';
import PropTypes from 'prop-types';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const MovieModal = props => {

  const {title, trailer, onHide} = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe 
          src={trailer} 
          title={title} 
          width="560" 
          height="315" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

MovieModal.propTypes = {
  title: PropTypes.string,
  trailer: PropTypes.string,
  onHide: PropTypes.func.isRequired
};

export default MovieModal;