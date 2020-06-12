import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = props => (
    <div className="menu">
        <ul>
            <li><NavLink to="/" exact><div className="home"><i className="home"></i></div></NavLink></li>
            <li><NavLink to="/trailers"><div className="video"><i className="videos"></i><i className="videos1"></i></div></NavLink></li>
            <li><NavLink to="/booking"><div className="bk"><i className="booking"></i><i className="booking1"></i></div></NavLink></li>
            <li><NavLink to="/contact"><div className="cnt"><i className="contact"></i><i className="contact1"></i></div></NavLink></li>
        </ul>
    </div>
);

export default menu;