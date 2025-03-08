import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt7286456%2F&psig=AOvVaw2_VWAiP4Azyefhl04X7isW&ust=1741490272532000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjDyP3C-YsDFQAAAAAdAAAAABAE"
            className="logo react"
            alt="React logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Git Workflow Collaboration</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
        <p>
          This is an example of a React application using Vite with Git
          Workflow.
        </p>
      </div>
      <p className="read-the-docs">
        WX made some edits blahblahblahblahblahblahblah
      </p>
    </>
  );
}

export default App;
