import { useEffect, useState } from "react";
import "./App.css";
import ColorFull from "./component/ColorFull";

function App() {
  const [count ,setCount]=useState(0)
  return<>

  <div className="counter">
    <h1>Counter is: {count}</h1>
    <button onClick={()=>{setCount(count+1)}} style={{color:"red"}}>Increase</button>
  </div>
  <ColorFull/>
  </>
}

export default App;
