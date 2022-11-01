import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <User
        name="Adam"
        age={49}
        email="adam@email.com"
      />
      <User
        name="Harry"
        age={42}
        email="harry@email.com"
      />
      <User
        name="Susan"
        age={43}
        email="susan@email.com"
      />
    </div>
  );
}

const props = {
  name: "Adam",
  age: "49",
  email: "adam@email.com",
};
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};

export default App;
