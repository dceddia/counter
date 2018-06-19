import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        <button>+</button>
        <span className="count">0</span>
        <button>&ndash;</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));
