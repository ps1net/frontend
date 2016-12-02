import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Dice extends Component {

  static propTypes = {
    isActive: PropTypes.bool.isRequired,

  }

  rollTheDice(){
      this.props.isActive = false;
  }

  render() {
    return (
        <div
            className={this.props.isActive ? 'dice' : 'diceOff'}>
        </div>
    );
  }

}
