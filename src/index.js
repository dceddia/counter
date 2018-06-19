import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './index.css';

class Counter extends React.Component {
  increment = () => {
    // TODO
  };

  decrement = () => {
    // TODO
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+</button>
        <div className="count">{this.props.count}</div>
        <button onClick={this.decrement}>&ndash;</button>
      </div>
    );
  }
}

// state = { count: 42 }
const mapStateToProps = state => ({
  count: state.count
});
const ReduxCounter = connect(mapStateToProps)(Counter);

ReactDOM.render(<ReduxCounter />, document.querySelector('#root'));
