import React from 'react';

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const myModal = (props) => {
    return (
      <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <iframe  src="https://www.youtube.com/embed/zAGVQLHvwOY" frameborder="0" allowfullscreen></iframe>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
    );
  };

  export default myModal;