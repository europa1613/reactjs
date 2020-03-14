import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: this.props.value
    };
    /* constructor() {
    super();
    console.log(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  } */
    handleIncrement = () => {
        console.log("Incrementing!", this);
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        console.log("props: ", this.props);
        let classes = this.getCountClass();
        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary  btn-sm"
                >
                    Increment
                </button>
                <button className="btn btn-danger btn-sm m-2" 
                        onClick={this.props.onDelete}>
                    Decrement
                </button>
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
