import React from 'react';

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const bookingModal = props => {
    let seats = [];

    for (let i=1; i<=100; i++) {
        seats.push(<div className="seat">{i}</div>);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        '{props.title}' day: {props.day} hour: {props.hour}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <main>
                        <div id="selection" className="selection">
                            {/* You are booking seats for day: {props.day} hour: {props.hour} */}
                            <div id="seatsContainer" class="seatsContainer">
                                {seats}
                            </div>
                        </div>

                        <div id="detail" className="detail">
                            <input id="name" placeholder="name"/>
                            <input id="surname" placeholder="surname"/>
                            <input id="email" placeholder="e-mail"/>
                            <input id="phone" placeholder="phone"/>
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
};

export default bookingModal;