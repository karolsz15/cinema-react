import React, { Component } from 'react';
import CinemaContainer from './containers/CinemaContainer';
// import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

// import Courses from './containers/Courses/Courses';
// import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
        
    //   <BrowserRouter>
        <CinemaContainer />
    //   </BrowserRouter>
    );
  }
}

export default App;