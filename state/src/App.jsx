import { useState } from "react";
import "./App.css";
import "./New";

function App() {
  const [inputValue, setInputValue] = useState("");

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // return (
  //   <div className="App">
  //     <input
  //       type="text"
  //       onChange={handleInputChange}
  //     />
  //     {inputValue}
  //   </div>
  // );

  // const [showText, setShowText] = useState(true);

  // return (
  //   <div className="App">
  //     <button onClick={() => setShowText(!showText)}> Show/Hide </button>
  //     {showText === true && <h3>New stuff</h3>}
  //   </div>
  // );

  // const [textColor, setTextColor] = useState("");

  // return (
  //   <div className="App">
  //     <button
  //       onClick={() => {
  //         setTextColor(textColor === "black" ? "steelblue" : "black");
  //       }}
  //     >
  //       Change color
  //     </button>
  //     <h2 style={{ color: textColor }}>This is react state</h2>
  //   </div>
  // );
  // let num = 0;
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <h3>{count}</h3>
    </div>
  );
}

export default App;
