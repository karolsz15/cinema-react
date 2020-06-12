import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from '../components/Homepage/Homepage';
import Menu from '../components/Menu/Menu';

//testing
import Trailers from '../components/Trailers/Trailers';
import Contact from '../components/Contact/Contact';
import Booking from '../components/Booking/Booking';
import Error from '../components/Error/Error';;

class CinemaContainer extends Component {
    render () {
      return (
        <React.Fragment>
            <div class="full">
                <Menu />
                <Switch>
                    <Route path ="/" exact component={Homepage} />
                    <Route path ="/trailers" component={Trailers} />
                    <Route path ="/booking" component={Booking} />
                    <Route path ="/contact" component={Contact} />
                    <Route component={Error} />
                </Switch>
            </div>
        </React.Fragment>
        );
    };
};
  
export default CinemaContainer;