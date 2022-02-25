import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const Contact = () => {
  // local state for displaying message sent notification
  const [headerMessage, setHeaderMessage] = useState(
    <>
      <h3 className="head">CONTACT</h3>
      <p>feel free to ask questions about reservations and the cinema</p>
    </>
  );

  // map state to consts
  const contactName = useSelector((state) => state.contactReducer.contactName);
  const contactEmail = useSelector((state) => state.contactReducer.contactEmail);
  const contactPhone = useSelector((state) => state.contactReducer.contactPhone);
  const contactMessage = useSelector((state) => state.contactReducer.contactMessage);

  // map dispatch to consts
  const dispatch = useDispatch();
  const updateContactName = useCallback(
    (name) => dispatch({ type: 'UPDATE_CONTACT_NAME', name }),
    [dispatch]
  );
  const updateContactEmail = useCallback(
    (email) => dispatch({ type: 'UPDATE_CONTACT_EMAIL', email }),
    [dispatch]
  );
  const updateContactPhone = useCallback(
    (phone) => dispatch({ type: 'UPDATE_CONTACT_PHONE', phone }),
    [dispatch]
  );
  const updateMessage = useCallback(
    (message) => dispatch({ type: 'UPDATE_MESSAGE', message }),
    [dispatch]
  );

  const messageObject = {
    name: contactName,
    email: contactEmail,
    phone: contactPhone,
    message: contactMessage,
  };

  const clearContactForm = () => {
    document.getElementById('name').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('phone').style.display = 'none';
    document.getElementById('message').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    setHeaderMessage(
      <>
        <h3 className="head">SENT!</h3>
        <p>your message has been sent succefully!</p>
      </>
    );
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();
    axios
      .post('https://karol-cinema.firebaseio.com/messages.json', messageObject)
      .then((response) => {
        console.log(response.data);
        clearContactForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main">
      <div className="contact-content">
        <div className="logo">
          <a href="/">
            <img src="images/logo4.png" alt="" />
          </a>
          <p>Ticket booking app</p>
        </div>
        <div className="clearfix" />
      </div>
      <div className="contact-content">
        <div className="main-contact">
          {headerMessage}
          <div className="contact_info">
            <form>
              <div className="col-md-6 contact-left">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => updateContactName(e.target.value)}
                  required
                />
                <input
                  id="email"
                  type="text"
                  placeholder="E-mail"
                  onChange={(e) => updateContactEmail(e.target.value)}
                  required
                />
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone"
                  onChange={(e) => updateContactPhone(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6 contact-right">
                <textarea
                  id="message"
                  placeholder="Message"
                  onChange={(e) => updateMessage(e.target.value)}
                />
                <input
                  id="submit"
                  type="submit"
                  value="SEND"
                  onClick={(e) => sendMessageHandler(e)}
                />
              </div>
              <div className="clearfix" />
            </form>
          </div>
          <div className="contact_info">
            <h3>Find Us Here</h3>
            <div className="map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.321380879272!2d19.935162715717375!3d50.061542629423606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0e0789882b%3A0x3d71c4eb22dfdb51!2zUnluZWsgR8WCw7N3bnksIEtyYWvDs3c!5e0!3m2!1spl!2spl!4v1578239272803!5m2!1spl!2spl"
                width="600"
                height="450"
                frameBorder="0"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
