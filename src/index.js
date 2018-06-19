import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';

const initialState = {
  count: 0
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
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

ReactDOM.render(
  <Provider store={store}>
    <ReduxCounter />
  </Provider>,
  document.querySelector('#root')
);
