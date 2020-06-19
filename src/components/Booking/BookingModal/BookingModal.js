import React from 'react';

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import SeatsSelection from './SeatsSelection';

const bookingModal = props => {

    String.prototype.Capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        '{props.title}' on {props.day.Capitalize()} at {props.hour}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <main>
                       <SeatsSelection day={props.day} hour={props.hour} title={props.title} />
                    </main>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
    );
};

export default bookingModal;