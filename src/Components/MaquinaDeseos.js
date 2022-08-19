import React, { useState, useEffect } from "react";
const MaquinaDeseos = () => {
  const [elements, setElements] = useState([]);
  const elementQty = 9;

  useEffect(() => {
    console.log("triggered");
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
      console.log(i);
    }
  };
  const placeElements = () => {
    let deseosDiv = document.getElementById("maquina-deseos-div");
    deseosDiv.textContent = "";
    elements.forEach((element) => {
      let elementBtn = document.createElement("button");
      elementBtn.style.left = `${getRandomInt(90)}%`;
      elementBtn.style.bottom = `${getRandomInt(70) + 10}%`;
      elementBtn.textContent = element;
      elementBtn.classList.add("maquina-btn");
      console.log(deseosDiv);
      deseosDiv.append(elementBtn);
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          mainLoop();
        }}
      ></button>
      <div id="maquina-deseos-div"></div>
    </div>
  );
};

export default MaquinaDeseos;
