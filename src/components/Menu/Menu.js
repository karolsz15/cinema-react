import React from 'react';

const menu = props => (
    <div class="menu">
        <ul>
            <li><a class="active" href="/"><i class="home"></i></a></li>
            <li><a href="/videos"><div class="video"><i class="videos"></i><i class="videos1"></i></div></a></li>
            <li><a href="/book"><div class="bk"><i class="booking"></i><i class="booking1"></i></div></a></li>
            <li><a href="/contact"><div class="cnt"><i class="contact"></i><i class="contact1"></i></div></a></li>
        </ul>
    </div>
);

export default menu;