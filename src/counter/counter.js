import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  handlePlusClick = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1,
    }));
  };
  handleMinusClick = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count - 1,
    }));
  };
  render() {
    return [
      <h1>{this.state.count}</h1>,
      <button onClick={this.handlePlusClick}>Plus</button>,
      <button onClick={this.handleMinusClick}>Minus</button>,
    ];
  }
}
