import { useState } from "react";
import "./App.css";

import { Restorant } from "./Component/RestorantOption";
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from "./Component/Home";
import { RestorantManue } from "./Component/RestorantManue";
// import { Route } from 'react-router';
import { SearchFood } from "./Component/SearchFood";

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/RestorantOption" element={<Restorant/>}/>
      <Route path="/city/bhubaneswar/:id" element={<RestorantManue/>}/>
      <Route path="//city/bhubaneswar/:id/search" element={<SearchFood/>}/>
     </Routes>
     </BrowserRouter>
     
    </>
  );
}

export default App;
