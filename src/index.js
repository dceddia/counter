import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  count: 42
};
function reducer(state = initialState, action) {
  return state;
}
const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
