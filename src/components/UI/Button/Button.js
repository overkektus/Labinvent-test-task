import React from 'react';
import classes from './Button.css';

const button = (props) => {
  return(
    <button
      id={props.id}
      className={[classes.Button, props.inverted ? classes.Inverted : null].join(' ')}
      onClick={(event) => props.clicked(event)}
    >
      {props.children}
    </button>
  );
};

export default button;
