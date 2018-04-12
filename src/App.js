import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from './store/actions/index';

import Wireless from './components/Wireless/Wireless';
import Ethernet from './components/Ethernet/Ethernet';
import Button from './components/UI/Button/Button';

import classes from './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    if(event.target.id === "save")
      this.props.onSubmit();
    if(event.target.id === "cancel")
      this.props.onCancel();
  }

  componentDidMount() {
    this.props.onCancel();
  }

  render() {
    return(
      <form className={[classes.App, classes.Wrapper].join(' ')} method="post">
        <div className={classes.Settings__wrapper}>
          <div className={classes.Settings}>
            <Ethernet />
          </div>
          <div className={classes.Border}></div>
          <div className={classes.Settings}>
            <Wireless />
          </div>
        </div>
        <div className={classes.Buttons}>
          <div className={classes.ButtonWrapper}>
            <Button id="save" clicked={this.submitHandler}>Save</Button>
            <Button id="cancel" clicked={this.submitHandler} inverted>Cancel</Button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: () => dispatch(actionCreators.submitFormState()),
    onCancel: () => dispatch(actionCreators.getFormState())
  };
};

export default connect(null, mapDispatchToProps)(App);
