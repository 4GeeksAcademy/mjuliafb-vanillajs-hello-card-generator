/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("button").addEventListener("click", function() {
    generateCard();
  });

  document.querySelector("#setWidth").addEventListener("input", function() {
    let widthValue = this.value;
    let newWidth = document.querySelector("#totalCard");

    if (widthValue === "") {
      newWidth.style.width = "200px"; // Restaurar el tamaño por defecto
    } else {
      newWidth.style.width = widthValue + "px";
    }
  });

  document.querySelector("#setHeight").addEventListener("input", function() {
    let heightValue = this.value;
    let newHeight = document.querySelector("#totalCard");
    if (heightValue === "") {
      newHeight.style.height = "300px"; // Restaurar el tamaño por defecto
    } else {
      newHeight.style.height = heightValue + "px";
    }
  });

  generateCard();

  let autoUpload = setInterval(generateCard, 10000);
});

const generateCard = () => {
  function type() {
    let cardType = ["♣️", "♦️", "♥️", "♠️"];
    let cardIndex = Math.floor(Math.random() * cardType.length);
    let selectedType = cardType[cardIndex];

    if (selectedType === "♥️" || selectedType === "♦️") {
      document.querySelector(".cardTypeUp").style.color = "red";
      document.querySelector(".cardTypeBottom").style.color = "red";
    } else if (selectedType === "♣️" || selectedType === "♠️") {
      document.querySelector(".cardTypeUp").style.color = "black";
      document.querySelector(".cardTypeBottom").style.color = "black";
    }
    return selectedType;
  }

  function number() {
    let numberType = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "J",
      "Q",
      "K"
    ];
    let cardIn = Math.floor(Math.random() * numberType.length);
    return numberType[cardIn];
  }

  let newCardTypeUp = document.querySelector(".cardTypeUp");
  newCardTypeUp.innerHTML = type();

  let newCardTypeBottom = document.querySelector(".cardTypeBottom");
  newCardTypeBottom.innerHTML = newCardTypeUp.innerHTML;

  let newCardNumber = document.querySelector(".cardNumber");
  newCardNumber.innerHTML = number();
};
