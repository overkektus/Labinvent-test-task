import React, { Component } from 'react';

import classes from './CheckBox.css';

class CheckBox extends Component {
  
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.clicked(event.target.checked)
  }

  render() {
    return(
      <label htmlFor={this.props.id} className={[classes.control, classes.controlCheckbox].join(' ')}>
        {this.props.label}
        <input
          id={this.props.id}
          type="checkbox"
          checked={this.props.val}
          onChange={this.handleChange}
          disabled={this.props.disabled}
        />
        <div className={classes.control__indicator}></div>
      </label>
    );
  }
}

export default CheckBox;
