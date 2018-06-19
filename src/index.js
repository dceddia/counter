import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  render() {
    return <div>hi</div>;
  }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));
