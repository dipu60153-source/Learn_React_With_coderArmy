import { useState } from "react";
import "./App.css";
// import { const } from './../../../Web_Dev_Day13/redux-project/src/Slice';

function App() {
  let templet = "";
  const [pShow, setPshow] = useState(true);
  const [hide, sethide] = useState(false);
  const [status, setstatus] = useState(false);

  {
    // <input type={(hide)? "text":"password"} />
    // <button onClick={(v = sethide(!hide))}>{hide ? "hide" : "show"}</button>;
  }

  if (pShow) {
    templet = (
      <>
        {" "}
        <button onClick={() => setPshow(!pShow)}>show</button>
        <p className="red">hello gays</p>
      </>
    );
  } else {
    templet = <button onClick={() => setPshow(!pShow)}>hide</button>;
  }

  return (
    <div className="red">
      {templet}

      {/* <input type={status? "text":"password"} /> */}
      <button onClick={() => setstatus(!status)}>
        {status ? "hide" : "show"}
      </button>
      {status ? <p className="re">hello hide </p> : ""}
    </div>
  );
}

export default App;
