import React from 'react';
import classes from './Landing.module.css';
import DataCard from '../../UI/DataCard/DataCard';

const Landing = (props) => {
  return (
    <div className={classes.LandingMain}>
      <div className={classes.GlassOver}></div>
      <div className={classes.LandingImage}></div>
      <div className={classes.DataArea}>
        {/* <div className={classes.DataList}>List</div> */}
        <section className={classes.DataCardSection}>
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
        </section>
        {/* <div className={classes.Ads}>Advertisements</div> */}
      </div>
    </div>
  );
};

export default Landing;
