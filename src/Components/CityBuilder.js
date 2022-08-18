import React, { useState, useEffect } from "react";
import Main1 from "../Images/City/Main1.png";
import Main2 from "../Images/City/Main2.png";
import Main3 from "../Images/City/Main3.png";
import Side1 from "../Images/City/Side1.png";
import Side2 from "../Images/City/Side2.png";
import Side3 from "../Images/City/Side3.png";

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
    setUrl();
  }, [playerChoices]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const AIChooses = (element) => {
    setAIChoices((arr) => [...arr, element]);
  };

  const setUrl = () => {
    let cityL = document.getElementById("city-1");
    let cityM = document.getElementById("city-2");
    let cityR = document.getElementById("city-3");
    playerChoices.forEach((element, index) => {
      if (index === 0) {
        switch (element) {
          case 1:
            cityL.src = Side1;
            break;
          case 2:
            cityL.src = Side2;
            break;
          case 3:
            cityL.src = Side3;
            break;
        };
      } else if (index === 1) {
        switch (element) {
          case 1:
            cityM.src = Main1;
            break;
          case 2:
            cityM.src = Main2;
            break;
          case 3:
            cityM.src = Main3;
            break;
        };
      } else {
        switch (element) {
          case 1:
            cityR.src = Side1;
            break;
          case 2:
            cityR.src = Side2;
            break;
          case 3:
            cityR.src = Side3;
            break;
        };
      };
    });
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
    if (playerChoices.length === 3) submitBtn.classList.add("submit-show");
  };

  const destiny = () => {
    let count = 0;
    for (let i = 0; i < playerChoices.length; i++) {
      if (playerChoices[i] === AIChoices[i]) count++;
    }
    if (count < 3) apocalypsis();
    console.log(playerChoices, AIChoices, count);
  };

  const apocalypsis = () => {
    console.log("triggered apocalypsis");
    displayHints();
  };

  const displayHints = () => {};

  return (
    <div id="city">
      <div id="city-content">
        <img id="city-1"></img>
        <img id="city-2"></img>
        <img id="city-3"></img>
      </div>
      <dialog id="modal-a">
        <div>
          <span>
            <img className="modal-img" src={Side1}></img>
            <button
              className="button-85"
              onClick={() => {
                modalA.close();
                playerChooses("A", 1);
              }}
            >
              Pick
            </button>
          </span>
          <span>
            <img className="modal-img" src={Side2}></img>
            <button
              className="button-85"
              onClick={() => {
                modalA.close();
                playerChooses("A", 2);
              }}
            >
              Pick
            </button>
          </span>
          <span>
            <img className="modal-img" src={Side3}></img>
            <button
              className="button-85"
              onClick={() => {
                modalA.close();
                playerChooses("A", 3);
              }}
            >
              Pick
            </button>
          </span>
        </div>
      </dialog>
      <dialog id="modal-b">
        <div>
          <span>
            <img className="modal-img" src={Main1}></img>
            <button
              className="button-85"
              onClick={() => {
                modalB.close();
                playerChooses("B", 1);
              }}
            >
              Pick
            </button>
          </span>
          <span>
            <img className="modal-img" src={Main2}></img>
            <button
              className="button-85"
              onClick={() => {
                modalB.close();
                playerChooses("B", 2);
              }}
            >
              Pick
            </button>
          </span>
          <span>
            <img className="modal-img" src={Main3}></img>
            <button
              className="button-85"
              onClick={() => {
                modalB.close();
                playerChooses("B", 3);
              }}
            >
              Pick
            </button>
          </span>
        </div>
      </dialog>
      <dialog id="modal-c">
        <div>
          <span>
            <img className="modal-img" src={Side1}></img>
            <button
              className="button-85"
              onClick={() => {
                modalC.close();
                playerChooses("C", 1);
              }}
            >
              Pick
            </button>
          </span>
          <span>
            <img className="modal-img" src={Side2}></img>
            <button
              className="button-85"
              onClick={() => {
                modalC.close();
                playerChooses("C", 2);
              }}
            >
              Pick
            </button>
          </span>
          <span>
            <img className="modal-img" src={Side3}></img>
            <button
              className="button-85"
              onClick={() => {
                modalC.close();
                playerChooses("C", 3);
              }}
            >
              Pick
            </button>
          </span>
        </div>
      </dialog>

      <div id="btn-div">
        <button
          className="button-85"
          onClick={() => {
            modalA.showModal();
            console.log(AIChoices);
          }}
        >
          Element A
        </button>
        <button
          className="button-85"
          onClick={() => {
            modalB.showModal();
            console.log(AIChoices);
          }}
        >
          Element B
        </button>
        <button
          className="button-85"
          onClick={() => {
            modalC.showModal();
            console.log(AIChoices);
          }}
        >
          Element C
        </button>
        <button
          className="submit"
          onClick={() => {
            destiny();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CityBuilder;
