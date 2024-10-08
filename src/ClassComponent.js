import React from "react";

class CounterApp extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  render() {
    const count = this.state.count;

    return (
      <div className="mainDiv">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }))
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: count - 1,
            }))
          }
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default CounterApp;
