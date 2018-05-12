import React from "react";
import { render } from "react-dom";
import "./styles.css";
import Test from './test'

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <Test />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
