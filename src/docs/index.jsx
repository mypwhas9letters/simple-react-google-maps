import React from "react";
import { render } from "react-dom";
import MyComponent from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
        <MyComponent
          apiKey={""}
          style={{height: "400px", width: "100%"}}
          zoom={6}
          center={{lat: 37.4224764, lng: -122.0842499}}
          markers={{lat: 37.4224764, lng: -122.0842499}}
        />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
