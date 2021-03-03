import React from 'react';
import classes from './DataCard.module.css';

const DataCard = (props) => {
  return (
    <div className={classes.DataCardMain}>
      <div className={classes.UpperBand}>Name Of Coin</div>
      <div className={classes.ImageSection}>
        <img
          src='https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/XRP.svg'
          alt=''
          name=''
        />
      </div>
      <div className={classes.InfoSection}>
        <div style={{ fontSize: 18, fontWeight: 600, color: '#002453' }}>
          XRP
        </div>
        <div className={classes.PriceData}>
          <div className={classes.LabelData}>
            <span className={classes.Label}>Price</span>
            <span className={classes.DataPr}>0.45133601</span>
          </div>
          <div className={classes.LabelData}>
            <span className={classes.Label}>24 Hour % Change</span>
            <span className={classes.Data}>%4.71</span>
          </div>
          <div className={classes.LabelData}>
            <span className={classes.Label}>7 Days % Change</span>
            <span className={classes.Data}>%4.71</span>
          </div>
        </div>
        <div className={classes.LabelData}>
          <span className={classes.Label} style={{ marginLeft: 5 }}>
            Volume
          </span>
          <span className={classes.DataPr}>$ 4140727256.68</span>
        </div>
      </div>
      <div className={classes.ButtonSection}>Buttons Section</div>
    </div>
  );
};

export default DataCard;
