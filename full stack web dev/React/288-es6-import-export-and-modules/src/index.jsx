import React from "react";
import ReactDOM from "react-dom/client";
import pi, { doublepi } from "./math";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ul>
    <li>{pi}</li>
    <li>{doublepi()}</li>
    <li>3</li>
  </ul>
);
