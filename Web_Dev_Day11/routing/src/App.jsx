import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { Detail } from "./Detail";
import { Zero } from "./Zero";
import { Hi } from "./Hi";
import { Hello } from "./Hello";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navBar">
          <Link to="/">Contact</Link>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="Detail">Detail</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Contact />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Detail" element={<Detail />}>
          <Route index element={<Zero />}></Route>
          <Route path="Hello" element={<Hello />}></Route>
          <Route path="Hi" element={<Hi />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Home/>
    <Contact/>
    <About/> */}
    </>
  );
}

export default App;
