import React from 'react';

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const bookingModal = props => (

<Modal
{...props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            PROPS.TITLE
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <main>
            <div id="selection" className="selection">
                <select className="custom-select custom-select-lg" id="movie" name="movieSelection">
                    <option selected disabled style={{display: 'none'}}>
                        Choose movie
                    </option>
                </select>
                <select className="custom-select custom-select-lg" id="day" name="daySelection">
                    <option selected disabled style={{display: 'none'}}>
                        Choose day
                    </option>
                </select>
                <select className="custom-select custom-select-lg" id="hour" name="hourSelection">
                    <option selected disabled style={{display: 'none'}}>
                        Choose hour
                    </option>
                </select>
            </div>
            {/* <div id="ticket" className="ticket">
                <select className="custom-select custom-select-lg" id="movie" name="movieSelection">
                    <option selected disabled style={{display: 'none'}}>
                        Choose movie
                    </option>
                </select>
                <select className="custom-select custom-select-lg" id="day" name="daySelection">
                    <option selected disabled style={{display: 'none'}}>
                        Choose day
                    </option>
                </select>
                <select className="custom-select custom-select-lg" id="hour" name="hourSelection">
                    <option selected disabled style={{display: 'none'}}>
                        Choose hour
                    </option>
                </select>
            </div> */}
            <div id="hall" className="hall"></div>
            <div id="detail" className="detail">
                <input id="name" placeholder="name"/>
                <input id="surname" placeholder="surname"/>
                <input id="email" placeholder="e-mail"/>
                <input id="phone" placeholder="phone number"/>
            </div>
            <div id="summation" className="summation">Summary</div>
            <div id="summationList" className="summationList"></div>
            <div id="finishReservation" className="finishReservation">Book!</div>
        </main>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
</Modal>

);

export default bookingModal;