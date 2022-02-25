import React from 'react';

function Error() {
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
          <img
            className="errorImg"
            alt="Error message page not found"
            src="https://firebasestorage.googleapis.com/v0/b/karol-cinema.appspot.com/o/error404.jpg?alt=media&token=cbb825e6-bc0c-408f-a317-1552486bd90e"
          />
        </div>
      </div>
    </div>
  );
}

export default Error;
