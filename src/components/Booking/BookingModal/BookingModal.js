import React from 'react';

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import SeatsSelection from './SeatsSelection';
import PropTypes from 'prop-types';

const bookingModal = props => {

    const {title, day, hour, onHide} = props;

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
                        '{title}' on {day.Capitalize()} at {hour}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <main>
                       <SeatsSelection day={day} hour={hour} title={title} />
                    </main>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
    );
};

bookingModal.propTypes = {
    title: PropTypes.string,
    day: PropTypes.string.isRequired,
    hour: PropTypes.string,
    onHide: PropTypes.func.isRequired
};

export default bookingModal;