import React from "react";
import ReactDOM from "react-dom/client";

const name = "prabh";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>
);
