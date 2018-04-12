import React from 'react';
import MaskedInput from 'react-text-mask';

import classes from './TextBox.css';

const textBox = (props) => {
  if(!props.secKey)
    return(
      <div className={classes.TextInput__wrapper}>
        <label htmlFor={props.id} className={classes.Label}>
          {props.label}
        </label>
        {props.require ? <span className={classes.Require}>*</span> : "\u00A0"}
        <MaskedInput
          mask={[/d?/, /\d?/, /\d/,'.', /\d?/, /\d?/, /\d/, '.', /\d?/, /\d?/, /\d/, '.', /\d?/, /\d?/, /\d/]}
          guide={!props.disabled}
          id={props.id}
          name={props.name}
          className={classes.TextInput}
          defaultValue={props.val}
          value={props.disabled ? null : props.val}
          disabled={props.disabled}
          onChange={(event) => props.onChange(event.target.value)}
        />
      </div>
    );
  else {
    return(
      <div className={classes.TextInput__wrapper}>
        <label htmlFor={props.id} className={classes.Label}>
          {props.label}
        </label>
        {props.require ? <span className={classes.Require}>*</span> : "\u00A0"}
        <input
          id={props.id}
          name={props.name}
          className={classes.TextInput}
          defaultValue={props.val}
          disabled={props.disabled}
          onChange={(event) => props.onChange(event.target.value)}
        />
      </div>
    );
  }
};

export default textBox;
