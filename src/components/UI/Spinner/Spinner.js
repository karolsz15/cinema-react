import React from 'react';
import classes from './Spinner.module.css';

function Spinner() {
  return (
    <div className={classes.Lds}>
      <div />
      <div />
    </div>
  );
}

export default Spinner;
