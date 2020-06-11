import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = props => (
    <div class="menu">
        <ul>
            <li><NavLink to="/" exact><div class="home"><i class="home"></i></div></NavLink></li>
            <li><NavLink to="/trailers"><div class="video"><i class="videos"></i><i class="videos1"></i></div></NavLink></li>
            <li><NavLink to="/booking"><div class="bk"><i class="booking"></i><i class="booking1"></i></div></NavLink></li>
            <li><NavLink to="/contact"><div class="cnt"><i class="contact"></i><i class="contact1"></i></div></NavLink></li>
        </ul>
    </div>
);

export default menu;