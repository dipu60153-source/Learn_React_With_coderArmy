import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [enquire, setenquire] = useState(false);
  return (
    <>
      <button className="en" onClick={() => setenquire(!enquire)}>
        Enquire naw
      </button>
      <div
        onClick={() => setenquire(!enquire)}
        className={`ola ${enquire ? "showmodal" : ""}`}
      ></div>
      <div className={`modaldiv ${enquire ? "showdiv" : ""}`}>
        Enquire naw{" "}
        <span onClick={() => setenquire(!enquire)}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
      {/* <span>&times;</span> */}
    </>
  );
}

export default App;
