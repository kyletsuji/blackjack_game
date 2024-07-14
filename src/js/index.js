
import '../styles.css';
import {createDeck, shuffle} from './deck.js';
import {dealCards, hit, stand, double} from './gameplay.js';
import {remove, display} from './displays.js';
import {setBet, updateBalance, hasEnough, canDouble} from './money.js';

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
  setBet(1);
  if (!hasEnough()) {
    alert('Insufficient balance');
    return;
  }
  createDeck();
  shuffle();
  dealCards();
  updateBalance();
  toggleChips();
  if (canDouble()) {
    display('double');
  }
  display('hit');
  display('stand');
});

BLUE_CHIP.addEventListener('click', function() {
  setBet(5);
  if (!hasEnough()) {
    alert('Insufficient balance');
    return;
  }
  createDeck();
  shuffle();
  dealCards();
  updateBalance();
  toggleChips();
  if (canDouble()) {
    display('double');
  }
  display('hit');
  display('stand');
});

RED_CHIP.addEventListener('click', function() {
  setBet(25);
  if (!hasEnough()) {
    alert('Insufficient balance');
    return;
  }
  createDeck();
  shuffle();
  dealCards();
  updateBalance();
  toggleChips();
  if (canDouble()) {
    display('double');
  }
  display('hit');
  display('stand');
});

HIT_BUTTON.addEventListener('click', function() {
  remove('double');
  hit();
});


STAND_BUTTON.addEventListener('click', function() {
  remove('double');
  remove('hit');
  remove('stand');
  stand();
});

DOUBLE_BUTTON.addEventListener('click', function() {
  double();
  remove('double');
  remove('hit');
  remove('stand');
});


export {toggleChips}