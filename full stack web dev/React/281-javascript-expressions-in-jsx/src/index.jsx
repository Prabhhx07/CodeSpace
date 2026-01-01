import React from "react";
import ReactDOM from "react-dom/client";

const fname = "prabh";
const lname = "ghuman"

const number = 7;

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1>hello {fname} {lname}</h1>
    <p>lucky number is {number}</p>
  </div>
);
