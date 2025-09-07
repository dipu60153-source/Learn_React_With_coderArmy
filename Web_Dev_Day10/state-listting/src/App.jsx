import { useState } from "react";
import "./App.css";
import { Increment } from "./Increment";
import GlobalContext from "./Global";


function App() {
  const [count, setCount] = useState(10);
  //  const data= useContext(GlobalContext)

  return (
    <>
      <GlobalContext.Provider value={{ count, setCount }}>
        <h1> Parent Counter is : {count}</h1>
        <Increment />
        {/* <First/>
      <Secont/>
      <Third/> */}
      </GlobalContext.Provider>
    </>
  );
}

export default App;
