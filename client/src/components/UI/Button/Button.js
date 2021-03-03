import React from 'react';
import './Button.css';

const Button = (props) => {
  const btnClass = props.isActive
    ? `btn-danger ${props.size}`
    : `btn-${props.btnStyle} ${props.size}`;

  return (
    <button onClick={props.clicked} className={btnClass}>
      {props.children}
    </button>
  );
};

export default Button;
