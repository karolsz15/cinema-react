import React from 'react';
import classes from './Spinner.module.css';

const Spinner = () => (
    <div className={classes.Lds}>
      <div />
      <div />
    </div>
  );

export default Spinner;
