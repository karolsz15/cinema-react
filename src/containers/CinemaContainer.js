import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from '../components/Homepage/Homepage';
import Menu from '../components/Menu/Menu';
import Trailers from '../components/Trailers/Trailers';
import Contact from '../components/Contact/Contact';
import Booking from '../components/Booking/Booking';
import Error from '../components/Error/Error';

const CinemaContainer = () => (
    <div className="full">
        <Menu />
        <Switch>
            <Route path ="/" exact component={Homepage} />
            <Route path ="/trailers" component={Trailers} />
            <Route path ="/booking" component={Booking} />
            <Route path ="/contact" component={Contact} />
            <Route component={Error} />
        </Switch>
    </div>
);
  
export default CinemaContainer;