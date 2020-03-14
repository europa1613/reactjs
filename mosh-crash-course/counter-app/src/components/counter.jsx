import React, { Component } from "react";

class Counter extends Component {
    /* constructor() {
    super();
    console.log(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  } */
    render() {
        console.log("props: ", this.props);
        let classes = this.getCountClass();
        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary  btn-sm"
                >
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    Delete
                </button>
            </div>
        );
    }

    getCountClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
