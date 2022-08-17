import React, { useState, useEffect } from "react";
const MaquinaDeseos = () => {
  const [elements, setElements] = useState([]);
  const elementQty = 9;

  useEffect(() => {
    console.log('triggered');
    mainLoop();
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
    elements.forEach((element) => {
      let elementBtn = document.createElement("button");
      elementBtn.style.marginLeft = `${getRandomInt(100)}%`;
      elementBtn.style.marginBottom = `${getRandomInt(100)}%`;
      elementBtn.textContent = element;
      elementBtn.classList.add("maquina-btn");
      console.log(deseosDiv);
      deseosDiv.append(elementBtn);
    });
  };

  return (
    <div id="maquina-deseos-div">
    </div>
  );
};

export default MaquinaDeseos;
