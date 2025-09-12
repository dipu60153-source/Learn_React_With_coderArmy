import { useState } from "react";
// import "./App.css";

function App() {
  const [pShow, setPshow] = useState(false);

  return (
    <>
      <input type={pShow ? "text" : "password"} />
      <button onClick={() => setPshow(!pShow)}>
        {pShow ? "hide" : "show"}
      </button>
    </>
  );
}

export default App;
