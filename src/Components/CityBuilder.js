import React, { useState, useEffect } from "react";
const CityBuilder = () => {
  const [AIChoices, setAIChoices] = useState([]);
  const [playerChoices, setPlayerChoices] = useState([]);
  let submitBtn = document.querySelector(".submit");
  let modalA = document.getElementById("modal-a");
  let modalB = document.getElementById("modal-b");
  let modalC = document.getElementById("modal-c");

  useEffect(() => {
    AIChooses(getRandomInt(3) + 1);
    AIChooses(getRandomInt(3) + 1);
    AIChooses(getRandomInt(3) + 1);
    console.log("first useEffect triggered");
  }, []);

  useEffect(() => {
    checkStatus();
    console.log("second useEffect triggered");
    console.log(playerChoices)
  }, [playerChoices]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const AIChooses = (element) => {
    setAIChoices((arr) => [...arr, element]);
  };

  const playerChooses = (element, choice) => {
    switch (element) {
        case "A":
            let newArray = [...playerChoices];
            newArray[0] = choice;
            setPlayerChoices(newArray);
            break;
        case "B":
            let newArray2 = [...playerChoices];
            newArray2[1] = choice;
            setPlayerChoices(newArray2);
            break;
        case "C":
            let newArray3 = [...playerChoices];
            newArray3[2] = choice;
            setPlayerChoices(newArray3);
            break;
    }
  };

  const displayElement = () => {};

  const checkStatus = () => {
    if (playerChoices.length === 3) submitBtn.classList.toggle("submit");
  };

  const destiny = () => {};

  const displayHints = () => {};

  return (
    <div id="city">
      <dialog id="modal-a">
        <span>
          <img></img>
          <button
            onClick={() => {
              modalA.close();
              playerChooses("A", "1");
            }}
          >
            Pick
          </button>
        </span>
        <span>
          <img></img>
          <button
            onClick={() => {
              modalA.close();
              playerChooses("A", "2");
            }}
          >
            Pick
          </button>
        </span>
        <span>
          <img></img>
          <button
            onClick={() => {
              modalA.close();
              playerChooses("A", "3");
            }}
          >
            Pick
          </button>
        </span>
      </dialog>
      <dialog id="modal-b">
        <span>
          <img></img>
          <button
            onClick={() => {
              modalB.close();
              playerChooses("B", "1");
            }}
          >
            Pick
          </button>
        </span>
        <span>
          <img></img>
          <button
            onClick={() => {
              modalB.close();
              playerChooses("B", "2");
            }}
          >
            Pick
          </button>
        </span>
        <span>
          <img></img>
          <button
            onClick={() => {
              modalB.close();
              playerChooses("B", "3");
            }}
          >
            Pick
          </button>
        </span>
      </dialog>
      <dialog id="modal-c">
        <span>
          <img></img>
          <button
            onClick={() => {
              modalC.close();
              playerChooses("C", "1");
            }}
          >
            Pick
          </button>
        </span>
        <span>
          <img></img>
          <button
            onClick={() => {
              modalC.close();
              playerChooses("C", "2");
            }}
          >
            Pick
          </button>
        </span>
        <span>
          <img></img>
          <button
            onClick={() => {
              modalC.close();
              playerChooses("C", "3");
            }}
          >
            Pick
          </button>
        </span>
      </dialog>

      <button
        onClick={() => {
          modalA.showModal();
          console.log(AIChoices);
        }}
      >
        Element A
      </button>
      <button
        onClick={() => {
          modalB.showModal();
          console.log(AIChoices);
        }}
      >
        Element B
      </button>
      <button
        onClick={() => {
          modalC.showModal();
          console.log(AIChoices);
        }}
      >
        Element C
      </button>
      <button className="submit">Submit</button>
    </div>
  );
};

export default CityBuilder;
