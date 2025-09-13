import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ✅ Brand icons come from free-brands-svg-icons
import {
  faAngellist,
  faFacebook,
  faLine,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// ✅ Solid icons come from free-solid-svg-icons
import { faHeart, faListUl, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [manu, setmanu] = useState(false);
  return (
    <div>
      <button onClick={() => setmanu(!manu)}>
        {manu ? (
          <FontAwesomeIcon icon={faXmark} className="lis" />
        ) : (
          <FontAwesomeIcon icon={faListUl} className="lis" />
        )}
      </button>
      <div className={`manu ${manu ? "active" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Galary</li>
          <li>Bag</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
