import React from "react";
import ReactDOM from "react-dom/client";

function Cards(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1>My Contacts</h1>
    <Cards
      name="naruto"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ONf_ZkNopsbgcYiJv5kwHcm7Qdn-kb24dg&s"
      tel="1234"
      email="jdban"
    />
    <Cards
      name="madara"
      img="https://i.pinimg.com/736x/11/46/54/114654efd2169c3ad5992c5df959dcef.jpg"
    />
  </div>
);
