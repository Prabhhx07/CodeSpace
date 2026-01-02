import React from "react";
import ReactDOM from "react-dom/client";

const date = new Date();
const time = date.getHours();
console.log(time);

let text;
const customStyle = {
  color: "",
};
if (time < 12) {
  text = "Good morning";
  customStyle.color = "red";
} else if (time > 12 && time < 18) {
  text = "Good afternoon";
  customStyle.color = "green";
} else {
  text = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <h1 className="heading" style={customStyle}>
    {text}
  </h1>
);
