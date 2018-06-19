import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+</button>
        <div className="count">{this.state.count}</div>
        <button onClick={this.decrement}>&ndash;</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));
