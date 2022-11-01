import { useState } from "react";
import styles from "./App.module.css";
import { User } from "./User";
import { Planet } from "./Planet";

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

  // const users = [
  //   { name: "Adam", age: 49 },
  //   { name: "Julie", age: 29 },
  //   { name: "Jackson", age: 19 },
  //   { name: "Sally", age: 23 },
  // ];
  // return (
  //   <div className="App">
  //     {users.map((user, key) => {
  //       return (
  //         <User
  //           name={user.name}
  //           age={user.age}
  //         />
  //       );
  //     })}
  //   </div>
  // );
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    { name: "Saturn", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {planets.map(
        (planet) => planet.isGasPlanet && <Planet name={planet.name} />
      )}
    </div>
  );
}

export default App;
