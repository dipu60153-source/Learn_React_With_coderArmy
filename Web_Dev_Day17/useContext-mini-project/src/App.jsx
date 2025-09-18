// import "./App.css";
import { useContext, useState } from "react";
import College from "./Component/College";
import ContextHandle from "./Component/contextAPI";
// import ContextHandle from "./Component/contextAPI";

function App() {
  const [sunject , setSubject]=useState("math")
  return (
    <>
      <ContextHandle.Provider value={sunject}>
        <div style={{ backgroundColor: "yellow", padding: 10 }}>
          <h1>Context Api</h1>
          <select  onClick={(e)=>setSubject(e.target.value)} >
            <option value="">select subject</option>
            <option value="english">english</option>
            <option value="phy">phy</option>
            <option value="che">che</option>
          </select>
          <button onClick={()=>setSubject("")}>clear subject</button>
          <College />
        </div>
      </ContextHandle.Provider>
    </>
  );
}

export default App;
