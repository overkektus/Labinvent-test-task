import React, { Component } from 'react';

import classes from './RadioBtn.css';

class RadioBtn extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if(event.target.id === this.props.choiceOneId) {
      this.props.onToggle(true);
    }
    else {
      this.props.onToggle(false);
    }
  }

  render() {
    console.log(this.props.val);
    return(
      <div className={classes.Radio__wrapper}>
        <label htmlFor={this.props.choiceOneId} className={[classes.control, classes.controlRadio].join(' ')}>
          {this.props.choiceOne}
          <input
            id={this.props.choiceOneId}
            type="radio"
            name={this.props.name}
            checked={this.props.val}
            onChange={this.handleChange}
            disabled={this.props.disabled}
          />
          <div className={classes.control__indicator}></div>
        </label>
        <label htmlFor={this.props.choiceTwoId} className={[classes.control, classes.controlRadio].join(' ')}>
          {this.props.choiceTwo}
          <input
            id={this.props.choiceTwoId}
            type="radio"
            name={this.props.name}
            checked={!this.props.val}
            onChange={this.handleChange}
            disabled={this.props.disabled}
          />
          <div className={classes.control__indicator}></div>
        </label>
      </div>
    );
  }
};

export default RadioBtn;
