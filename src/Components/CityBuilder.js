import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import painPeko from "../Audio/painpeko.mp3";
import elRich from "../Audio/elrich.mp3";
import Main1 from "../Images/City/Main1.png";
import Main2 from "../Images/City/Main2.png";
import Main3 from "../Images/City/Main3.png";
import Side1 from "../Images/City/Side1.png";
import Side2 from "../Images/City/Side2.png";
import Side3 from "../Images/City/Side3.png";

const CityBuilder = (props) => {
  const [playPeko, { stopPeko }] = useSound(painPeko, { volume: 0.5 });
  const [playElrich, { stopElrich }] = useSound(elRich, { volume: 1});
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
        }
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
        }
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
        }
      }
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

  const checkStatus = () => {
    if (
      playerChoices.length === 3 &&
      playerChoices[0] &&
      playerChoices[1] &&
      playerChoices[2]
    )
      submitBtn.classList.add("submit-show");
  };

  const destiny = () => {
    let count = 0;
    for (let i = 0; i < playerChoices.length; i++) {
      if (playerChoices[i] === AIChoices[i]) count++;
    }
    if (count < 3) apocalypsis();
    else {
      win();
    };
  };

  const apocalypsis = () => {
    let city = document.getElementById("city-content");
    city.style.backgroundImage =
      'url("https://media.giphy.com/media/TDK87zSVCkiwykyNMe/giphy-downsized-large.gif")';
    playPeko();
    alert(displayHints());
  };

  const displayHints = () => {
    let hints = "";
    if (playerChoices[0] != AIChoices[0]) {
      switch (AIChoices[0]) {
        case 1:
          hints += "We vegan ";
          break;
        case 2:
          hints += "We goth ";
          break;
        case 3:
          hints += "We smurfing ";
          break;
      }
    }
    if (playerChoices[1] != AIChoices[1]) {
      switch (AIChoices[1]) {
        case 1:
          hints += "SOL DE RUTA ";
          break;
        case 2:
          hints += "BASADO EL DEL MEDIO ";
          break;
        case 3:
          hints += "Googlemapeando el piso ";
          break;
      }
    }
    if (playerChoices[2] != AIChoices[2]) {
      switch (AIChoices[2]) {
        case 1:
          hints += "Amazonian ganggg";
          break;
        case 2:
          hints += "Protagonizando Malefica";
          break;
        case 3:
          hints += "Ultima opcion brah";
          break;
      }
    }
    return hints;
  };

  const win = () => {
    alert("insertar imagen de la hermani girando easy clapensio chasito honkai wins");
    playElrich();
  };

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
              Select
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
              Select
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
              Select
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
              Select
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
              Select
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
              Select
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
              Select
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
              Select
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
              Select
            </button>
          </span>
        </div>
      </dialog>
      <div id="btn-div">
        <button
          className="button-85"
          onClick={() => {
            modalA.showModal();
          }}
        >
          Element A
        </button>
        <button
          className="button-85"
          onClick={() => {
            modalB.showModal();
          }}
        >
          Element B
        </button>
        <button
          className="button-85"
          onClick={() => {
            modalC.showModal();
          }}
        >
          Element C
        </button>
      </div>{" "}
      <div class="bottom-btns">
        <button
          className="button-85"
          onClick={() => {
            let cityContent = document.getElementById("city-content");
            cityContent.style.backgroundImage = `url('${props.storedElement}')`;
          }}
        >
          Stored element
        </button>{" "}
        <button
          className="submit button-85"
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
