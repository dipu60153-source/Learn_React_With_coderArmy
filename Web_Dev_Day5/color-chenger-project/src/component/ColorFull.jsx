import React ,{ useEffect, useState } from "react";

function ColorFull() {
  const [color, setColor] = useState("black");

  // useEffect(callback function,dependency)
  useEffect(() => {
    // console.log("useEffet");
    document.body.style.backgroundColor = color;
  }, [color]);

  const colo = ["red", "blue", "orange", "pink", "green"];
//   console.log("hello")

  return (
    <>
      {/* // background color changer */}
      
      <div className="box">
        <h1>Background color changer</h1>
        <div className="but">
          {colo.map((v) => (
            <button key={v} onClick={() => setColor(v)}>
              {v}
            </button>
          ))}
          
        </div>
      </div>
    </>
  );
}


export default React.memo (ColorFull);