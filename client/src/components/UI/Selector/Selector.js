import React from 'react';
import classes from './Selector.module.css';

const Selector = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Value}>{props.value}</div>
      <input
        type='range'
        min='6'
        max='30'
        step='6'
        value={props.value}
        onChange={props.change}
      ></input>
    </React.Fragment>
  );
};

export default Selector;
