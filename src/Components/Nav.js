import * as React from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import mySound from "../Audio/City-background.mp3";
import { useState } from "react";

const Nav = () => {
  const [playSound, { stop }] = useSound(mySound, { volume: 0.5 });
  const [soundCount, setSoundCount] = useState(0);

  const triggerSound = () => {
    return soundCount % 2 === 0
      ? (playSound(), setSoundCount(soundCount + 1))
      : (stop(), setSoundCount(soundCount + 1));
  };

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
        <button onClick={() => triggerSound()} id="sound-btn"></button>
      </div>
    </div>
  );
};

export default Nav;
