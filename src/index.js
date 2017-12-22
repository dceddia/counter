import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

const App = () => (
  <div>
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
