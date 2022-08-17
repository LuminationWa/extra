import * as React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <button className="portrait" id="aizen">
        Aizen
      </button>
      <Link to="./city">
      <button className="portrait" id="city-builder">
        City Builder
      </button>
      </Link>
      <Link to="./deseos">
      <button className="portrait" id="maquina-deseos">
        Maquina de los deseos
      </button>
      </Link>
    </div>
  );
};

export default Nav;
