import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CinemaContainer from './containers/CinemaContainer';

function App() {
  return (
    <BrowserRouter>
      <CinemaContainer />
    </BrowserRouter>
  );
}

export default App;
