import * as React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="flex-div">
        <button className="portrait" id="aizen"></button>
        <h1 id="aizen-text">Aizen</h1>
      </div>
      <div className="flex-div">
        <Link to="./city">
          <div class="link-portrait">
            <button className="portrait" id="city-builder"></button>
            <h1 id="city-text">Hermaneishion</h1>
          </div>
        </Link>{" "}
      </div>
      <div className="flex-div">
        <Link to="./deseos">
          <div class="link-portrait">
            <button className="portrait" id="maquina-deseos"></button>{" "}
            <h1 id="portrait-text">RNG</h1>
          </div>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Nav;
