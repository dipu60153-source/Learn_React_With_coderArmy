import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [passwoed, setPassword] = useState("bsbfkjsf");
  const [length, setLength] = useState(10);
  const [numberChenged, setNumberChenged] = useState(false);
  const [characterChenged, setCharacterChenged] = useState(false);

  let passwordGenerated = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYX";
    if (numberChenged) {
      str += "0123456789";
    }
    if (characterChenged) {
      str += "~!@#$%^&*-+?.";
    }
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }, [length, characterChenged, numberChenged]);
  // function passwordGenerated() {

  // }

  useEffect(() => {
    passwordGenerated();
  }, [length, numberChenged, characterChenged]);

  return (
    <>
      <div className="pass">
        <h1>{passwoed}</h1>

        <input
          type="range"
          min={5}
          max={50}
          value={length}
          onChange={(v) => setLength(v.target.value)}
        />
        <label htmlFor=""> length ({length})</label>

        <input
          type="checkbox"
          defaultChecked={numberChenged}
          onChange={() => setNumberChenged(!numberChenged)}
        />
        <label htmlFor="">Number</label>

        <input
          type="checkbox"
          defaultChecked={characterChenged}
          onChange={() => setCharacterChenged(!characterChenged)}
        />
        <label htmlFor="">Character</label>
      </div>
    </>
  );
}

export default App;
