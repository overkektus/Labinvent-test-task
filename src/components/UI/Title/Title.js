import React from 'react';

import classes from './Title.css';

const title = (props) => (
  <legend className={classes.Title}>{props.children}</legend>
);

export default title;
