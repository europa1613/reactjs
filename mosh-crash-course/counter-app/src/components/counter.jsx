import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  hanldeIncrement() {
      console.log('Incrementing!', this);
  }
  render() {
    let classes = this.getCountClass();
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button onClick={this.hanldeIncrement} className="btn btn-secondary  btn-sm">Increment</button>
      </div>
    );
  }

  getCountClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;