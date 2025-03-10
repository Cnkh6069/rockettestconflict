import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import generateRandomNumber from "./randomNum";
import Navbar from "./components/Navbar";

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
            src="https://cdn.europosters.eu/image/750/canvas-print-joker-three-jokers-i121285.jpg"
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
        <button onClick={() => setCount(generateRandomNumber(1, 100))}>
          random number is {count}
        </button>
        <p>The above is a random number generator.</p>
      </div>
      <p className="read-the-docs">
        WX made somemore edits yet again blahblahblah
      </p>
      <button className="click-btn">Click Me!</button>
      <Navbar />
    </>
  );
}

export default App;
