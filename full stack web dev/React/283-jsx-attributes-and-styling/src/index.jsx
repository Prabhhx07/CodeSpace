import React from "react";
import ReactDOM from "react-dom/client";

const img = "https://picsum.photos/200";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1 className="heading" contentEditable="true">
      My Favourite Foods
    </h1>
    <div>
      <img src="https://picsum.photos/200" alt="" />
    </div>
  </div>
);
