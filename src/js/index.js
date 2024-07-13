// // import _ from 'lodash';
import '../styles.css';
import {deck, createDeck, shuffle, values, proceed} from './deck.js';
import {dealCards, hit, stand, double} from './gameplay.js';
import {hide, createCard, createBack} from './displays.js';
import {setBet, updateBalance} from './money.js';

const BLACK_CHIP = document.getElementById("black-chip");
const BLUE_CHIP = document.getElementById("blue-chip");
const RED_CHIP = document.getElementById("red-chip");

const HIT_BUTTON = document.getElementById("hit");
const STAND_BUTTON = document.getElementById("stand");
const DOUBLE_BUTTON = document.getElementById("double");


function toggleChips() {
  if (BLACK_CHIP.style.display == "none") {
    BLACK_CHIP.style.display = "flex";
    BLUE_CHIP.style.display = "flex";
    RED_CHIP.style.display = "flex";
  }
  else {
    BLACK_CHIP.style.display = "none";
    BLUE_CHIP.style.display = "none";
    RED_CHIP.style.display = "none";
  }
}



BLACK_CHIP.addEventListener('click', function() {
  createDeck();
  shuffle();
  dealCards();
  setBet(1);
  updateBalance();
  toggleChips();
});

BLUE_CHIP.addEventListener('click', function() {
  createDeck();
  shuffle();
  dealCards();
  setBet(5);
  updateBalance();
  toggleChips();
});

RED_CHIP.addEventListener('click', function() {
  createDeck();
  shuffle();
  dealCards();
  setBet(25);
  updateBalance();
  toggleChips();
});

HIT_BUTTON.addEventListener('click', hit);
STAND_BUTTON.addEventListener('click', stand);
DOUBLE_BUTTON.addEventListener('click', double);


export {toggleChips}

// let dollars = 100;
// let bet = 0;

// const PLAYER = document.getElementById("player");
// const PASS_BUTTON = document.getElementById("pass-button");











// function checkBet() {
//   if (document.querySelector('#bet').value > dollars || isNaN(parseInt(document.querySelector('#bet').value))) {
//     alert("you don't have enough or you did not enter a valid number");
//     proceed = false;
//   }
//   else {
//     proceed = true;
//   }
// }


// function updateBank() {
//   document.getElementById("amount").innerHTML = 'You have: $' + dollars;
// }

// createDeck();
// shuffle();
// updateBank();

// HIT_BUTTON.addEventListener('click', hitPlayer);
// PASS_BUTTON.addEventListener('click', hitDealer);
// NEXTHAND_BUTTON.addEventListener('click', checkBet);
// NEXTHAND_BUTTON.addEventListener('click', clearBoard);
// NEXTHAND_BUTTON.addEventListener('click', shuffle);
// NEXTHAND_BUTTON.addEventListener('click', dealCards);