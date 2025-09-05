import { useMemo, useState } from "react";
import "./App.css";

function FibonaciNuber(n) {
    if (n <= 1) {
      return n;
    }
    return FibonaciNuber(n - 1) + FibonaciNuber(n - 2);
  }


function App() {
  const [count, setCount] = useState(0);
  const [fibonaci, setFibonaci] = useState("");

  
  let result = useMemo(() => FibonaciNuber(fibonaci),[fibonaci]);
  return (
    <>
      <div className="dev">
        <h1>Counter is : {count}</h1>
        <button onClick={() => setCount(count + 1)}> Increament</button>
        <button onClick={() => setCount(count - 1)}> Decreament</button>
        <div>
          <h2>Fibonaci number is : {result}</h2>
          <input
            type="Number"
            value={fibonaci}
            onChange={(e) => setFibonaci(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
