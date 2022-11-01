import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";

function App() {
  // return (
  //   <div className={styles.App}>
  //     <h1 className={styles.name}>Adam</h1>
  //     <h3 className={styles.subtitle}>front end developer</h3>
  //   </div>
  // );

  // const age = 18;
  // const isGreen = true;

  // return (
  //   <div className={styles.name}>
  //     {age >= 18 ? <h1>Overage</h1> : <h1>Underage</h1>}
  //     <h3 style={{ color: isGreen ? "green" : "red" }}>This has color</h3>
  //   </div>
  // );

  const names = ["Adam", "Julie", "James", "Jackson", "Betty", "Harold"];
  return (
    <div className="App">
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}
    </div>
  );
}

export default App;
