import React from 'react';
import CinemaContainer from './containers/CinemaContainer';
import { BrowserRouter } from 'react-router-dom';

const App = () => (  
    <BrowserRouter>
        <CinemaContainer />
    </BrowserRouter>
  );

export default App;