import Nav from "./Components/Nav";
import CityBuilder from "./Components/CityBuilder";
import "./Styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaquinaDeseos from "./Components/MaquinaDeseos";
import React from "react";
import { useState } from "react";

function App() {
  const [storedElement, setStoredElement] = useState();
  return (
    <div id="content">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/city" element={<CityBuilder storedElement={storedElement}/>} />
          <Route path="/deseos" element={<MaquinaDeseos setStoredElement={setStoredElement}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
