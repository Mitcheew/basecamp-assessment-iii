import React, { Component } from 'react';
import './switch.css';

class Switch extends Component {
    constructor() {
        super();
        this.state = {toggleOn: true};
        this.switch = this.switch.bind(this);
    }
    switch() {
        this.setState(prevState => ({
            toggleOn: !prevState.toggleOn
        }))
        this.setState({black: !this.state.black})
    };

    render() {
        let btn_class = this.state.black ? "blackButton" : "whiteButton";
      return (
        <div className={btn_class}>
                <label>turn on/off</label>
            <button  className={btn_class} onClick={this.switch}>{this.state.toggleOn ? 'ON' : 'OFF'}</button>
        </div>
      );
    }
  }
  
  export default Switch;