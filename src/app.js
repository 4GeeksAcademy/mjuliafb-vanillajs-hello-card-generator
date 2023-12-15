/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("button").addEventListener("click", function() {
    document.querySelector("#totalCard").innerHTML = generateCard();
  });

  document.querySelector("#setWidth").addEventListener("input", function() {
    let widthValue = this.value;
    let newWidth = document.querySelector("#totalCard");

    if (widthValue == "0") {
      newWidth.style.width = "200px"; // Restaurar el tamaño por defecto
    } else {
      newWidth.style.width = widthValue + "px";
    }
  });

  document.querySelector("#setHeight").addEventListener("input", function() {
    let heightValue = this.value;
    let newHeight = document.querySelector("#totalCard");
    if (heightValue == "0") {
      newHeight.style.height = "300px"; // Restaurar el tamaño por defecto
    } else {
      newHeight.style.height = heightValue + "px";
    }
  });

  document.querySelector("#totalCard").innerHTML = generateCard();
});

const generateCard = () => {
  function type() {
    let cardType = ["♣️", "♦️", "♥️", "♠️"];
    let cardIndex = Math.floor(Math.random() * cardType.length);
    return cardType[cardIndex];
  }

  function number() {
    let numberIndex = Math.floor(Math.random() * 9) + 2;
    return numberIndex;
  }

  let allType = type();
  let cardTopColor = allType === "♥️" ? "red" : "black";

  return `
    <div class="cardTop">
      <p class="cardTypeUp" style="color: ${cardTopColor}">${allType}</p>
    </div>
    <div class="cardCenter">
      <p class="cardNumber">${number()}</p>
    </div>
    <div class="cardBottom">
      <p class="cardTypeBottom" style="color: ${cardTopColor}">${allType}</p>
    </div>
  `;
};
