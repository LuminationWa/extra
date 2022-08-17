import Nav from "./Components/Nav";
import CityBuilder from "./Components/CityBuilder";
import "./Styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaquinaDeseos from "./Components/MaquinaDeseos";

function App() {
  return (
    <div id="content">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/city" element={<CityBuilder />} />
          <Route path="/deseos" element={<MaquinaDeseos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
