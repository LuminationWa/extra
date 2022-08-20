import React from "react";
import { useState } from "react";

const FetchDialog = (props) => {
  const [currentSearch, setCurrentSearch] = useState("");
  const fetchData = () => {
    let dialogImg = document.getElementById("dialog-img");
    if (props.rarity === "SSR")
      fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=Vcg7HtLD5xp7mrYm0gi1Eks23ftlvXa6&s=${currentSearch}`,
        { mode: "cors" }
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          dialogImg.src = response.data.images.original.url;
        })
        .then(() => {
          const fetchButtons = document.getElementById("fetch-buttons");
          let storeBtn = document.createElement("button");
          storeBtn.addEventListener("click", function () {
            props.setStoredElement(dialogImg.src);
          });
          storeBtn.textContent = "Store element";
          fetchButtons.append(storeBtn);
        });
    else {
      alert(currentSearch);
    }
  };

  return (
    <dialog id="fetch-dialog">
      <div>
        <img id="dialog-img"></img>
        <input
          type="text"
          onChange={(e) => (
            setCurrentSearch(e.target.value), console.log(props.rarity)
          )}
        ></input>
        <div id="fetch-buttons">
          <button
            onClick={() => {
              fetchData();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default FetchDialog;
