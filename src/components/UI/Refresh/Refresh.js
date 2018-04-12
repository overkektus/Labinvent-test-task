import React from 'react';

import classes from './Refresh.css';

const refresh = (props) => (
  <button
    className={[classes.Refresh, props.disabled ? classes.RefreshDisabled : null].join(' ')}
    onClick={(e) => props.clicked(e)}
    disabled={props.disabled}
  ></button>
);

export default refresh;
