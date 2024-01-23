const diceOne = '<i class="fa-solid fa-dice-one"></i>';
const diceTwo = '<i class="fa-solid fa-dice-two"></i>';
const diceThree = '<i class="fa-solid fa-dice-three"></i>';
const diceFour = '<i class="fa-solid fa-dice-four"></i>';
const diceFive = '<i class="fa-solid fa-dice-five"></i>';
const diceSix = '<i class="fa-solid fa-dice-six"></i>';
const preRoll = '<i class="fa-solid fa-dice fa-shake"></i>';

var numberOfDice = 1;
var total = 0;

document.querySelector("#diceDisplay").innerHTML = preRoll;

function updateDice() {
  numberOfDice = parseInt(document.getElementById("numberOfDiceChoice").value);
  document.querySelector("#diceDisplay").innerHTML = preRoll;
  document.querySelector("#totalDisplay").innerHTML = "";
}

function roll() {
  var num = Math.floor(Math.random() * 6) + 1;
  return num;
}

function show() {
  var display = document.querySelector("#diceDisplay").innerHTML;
  if (display === preRoll) {
    document.querySelector("#diceDisplay").innerHTML = "";
    total = 0;
    for (let i = 0; i < numberOfDice; i++) {
      var diceRoll = roll();
      loadImage(diceRoll);
      total += diceRoll;
    }
    document.querySelector("#totalDisplay").innerHTML = total;
  } else {
    document.querySelector("#diceDisplay").innerHTML = preRoll;
    document.querySelector("#totalDisplay").innerHTML = "";
  }
}

function loadImage(number) {
  if (number === 1) {
    document.querySelector("#diceDisplay").innerHTML += diceOne;
  } else if (number === 2) {
    document.querySelector("#diceDisplay").innerHTML += diceTwo;
  } else if (number === 3) {
    document.querySelector("#diceDisplay").innerHTML += diceThree;
  } else if (number === 4) {
    document.querySelector("#diceDisplay").innerHTML += diceFour;
  } else if (number === 5) {
    document.querySelector("#diceDisplay").innerHTML += diceFive;
  } else if (number === 6) {
    document.querySelector("#diceDisplay").innerHTML += diceSix;
  } else {
    console.log("error");
  }
}

// document.getElementById("numberOfDiceChoice").addEventListener(onchang)
