import React, { useState, useEffect } from "react";
import FetchDialog from "./FetchDialog";
const MaquinaDeseos = (props) => {
  const [elements, setElements] = useState([]);
  const elementQty = 15;
  const [currentRarity, setCurrentRarity] = useState("");

  useEffect(() => {
    fillElements();
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const mainLoop = () => {
    setElements([]);
    fillElements();
    placeElements();
  };
  const generateElement = () => {
    let newElement = getRandomInt(100) + 1;
    if (newElement < 11) return "SR";
    else if (11 <= newElement && newElement < 100) return "R";
    else return "SSR";
  };
  const fillElements = () => {
    for (let i = 0; i < elementQty; i++) {
      setElements((arr) => [...arr, generateElement()]);
    }
  };
  const placeElements = () => {
    let deseosDiv = document.getElementById("maquina-deseos-div");
    deseosDiv.textContent = "";
    elements.forEach((element) => {
      let elementBtn = document.createElement("button");
      elementBtn.style.left = `${getRandomInt(95)}%`;
      elementBtn.style.bottom = `${getRandomInt(70) + 10}%`;
      elementBtn.textContent = element;
      if (element === "SR") elementBtn.classList.add("glow-sr");
      if (element === "SSR") elementBtn.classList.add("glow-ssr");
      elementBtn.classList.add("maquina-btn");
      if (element === "SSR" || element === "SR") {
        elementBtn.addEventListener("click", function () {
          setCurrentRarity(element);
          let dialog = document.querySelector("dialog");
          dialog.showModal();
        });
      }
      deseosDiv.append(elementBtn);
    });
  };

  return (
    <div id="maquina-deseos-grl">
      <FetchDialog
        rarity={currentRarity}
        setStoredElement={props.setStoredElement}
      />
      <button
        class="priority-btn"
        onClick={() => {
          mainLoop();
        }}
      >
        {" "}
        TUC CAMBIAS DE CANAL TUC CAMBIAS DE CANAL ES UNA COSA DE LOCOS ESTOY
        TRANQUILO ACA ESTOY STREAMEANDO
      </button>
      <div id="maquina-deseos-div"></div>
    </div>
  );
};

export default MaquinaDeseos;
