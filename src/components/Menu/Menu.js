import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink to="/" exact>
            <div className="home">
              <i className="home" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/trailers">
            <div className="video">
              <i className="videos" />
              <i className="videos1" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking">
            <div className="bk">
              <i className="booking" />
              <i className="booking1" />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <div className="cnt">
              <i className="contact" />
              <i className="contact1" />
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
