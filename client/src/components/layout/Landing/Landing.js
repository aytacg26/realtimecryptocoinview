import React from 'react';
import classes from './Landing.module.css';

const Landing = (props) => {
  return (
    <div className={classes.LandingMain}>
      <div className={classes.GlassOver}></div>
      <div className={classes.LandingImage}></div>
      <div className={classes.DataArea}>Data Area</div>
    </div>
  );
};

export default Landing;
