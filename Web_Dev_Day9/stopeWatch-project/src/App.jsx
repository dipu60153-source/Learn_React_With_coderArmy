import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [intervalRunning, setIntervalRunning] = useState(false);
  const intervalRef = useRef(null);

  function Start() {
    if (!intervalRunning) {
      intervalRef.current = setInterval(
        () => setTime((preTime) => preTime + 1),
        1000
      );
      setIntervalRunning(true);
    }
  }

  function Stop() {
    if (intervalRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIntervalRunning(false);
    }
  }

  function Reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  return (
    <>
      <h1>Stop Watch is : {time}</h1>
      <button onClick={() => Start()}>Start</button>
      <br />
      <br />
      <button onClick={() => Stop()}>Stop</button>
      <br />
      <br />
      <button onClick={() => Reset()}>Reset</button>
    </>
  );
}

export default App;
