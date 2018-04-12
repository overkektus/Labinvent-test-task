import React from 'react';

import Refresh from '../Refresh/Refresh';
import classes from './DropDown.css';

const dropDown = (props) => {
  const options = props.options.map(el => {
    let selected;
    if(el === props.selected) {
      selected = true;
    } else {
      selected = false;
    }
    return <option key={el} selected={selected}>{el}</option>
  });
  return(
    <div className={classes.select__wrapper}>
      <label htmlFor={props.id} className={classes.Label}>
          {props.label}
      </label>
      {props.require ? <span className={classes.Require}>*</span> : "\u00A0"}
      <div className={classes.select}>
        <select
          onChange={(event) => props.onSelect(event.target.selectedOptions[0].innerText)}
          disabled={props.disabled}>
          {options}
        </select>
        <div className={classes.select__arrow}></div>
      </div>
      <Refresh
        clicked={props.refreshClick}
        disabled={props.disabled}  
      />
    </div>
  );
};

export default dropDown;
