import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
// import Backdrop from '../UI/Backdrop/Backdrop';
import classes from './Drinks.module.css';

class Drinks extends Component {
  state = {
    show: false,
  };
  drinkMenuShow = () => {
    this.setState({ drinkMenu: true });
  };
  render() {
    return (
      <Aux>
        <div
          className={classes.Drinks}
          style={{
            visibility: this.props.show ? 'visible' : 'hidden',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          <div className={classes.Coke}></div>
        </div>
      </Aux>
    );
  }
}

export default Drinks;
