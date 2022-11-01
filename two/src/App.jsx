import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Job
        title="SFE"
        salary="90,000"
        company="Evensite"
      />
      <Job
        title="JBE"
        salary="68,000"
        company="Oceanianet"
      />
      <Job
        title="SSD"
        salary="100,000"
        company="iLearn"
      />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.salary}</h2>
      <h3>{props.company}</h3>
    </div>
  );
};

export default App;
