import React, { Component } from 'react';

import Homepage from '../components/Homepage/Homepage';
import Menu from '../components/Menu/Menu';

//testing
import Trailers from '../components/Trailers/Trailers';
import Contact from '../components/Contact/Contact';
import Booking from '../components/Booking/Booking';

class CinemaContainer extends Component {
    render () {
      return (
        <React.Fragment>
            <div class="full">
                <Menu />

                <Trailers />
            </div>
        </React.Fragment>
        );
    };
};
  
export default CinemaContainer;