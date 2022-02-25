import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import SeatsSelection from './SeatsSelection';

function BookingModal(props) {
  const { title, day, hour, onHide } = props;
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{ textTransform: 'capitalize' }}>
          '{title}' on {day} at {hour}
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
}

BookingModal.propTypes = {
  title: PropTypes.string,
  day: PropTypes.string,
  hour: PropTypes.string,
  onHide: PropTypes.func,
};

export default BookingModal;
