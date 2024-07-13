import {hide, createCard, createBack, show, clearBoard} from './displays.js';
import {deck, createDeck, shuffle, values, proceed} from './deck.js';
import {setBet, updateBalance, subtractBet, addBet, doubleBet} from './money.js';
import { add } from 'lodash';
import { toggleChips } from './index.js';

let count = 0;
let dealerHand = [];
let playerHand = [];


function calculate(hand) {
  let amount = 0;
  let ace = 0;
  hand.forEach((card) => {
    console.log(card.number);
    if (card.number === 'A') {
      ace++;
    }
    else {
      amount += values.get(card.number);
    }
  });
  while (ace > 0) {
    if (amount + 11 <= 22 - ace) {
      amount += 11;
    }
    else {
      amount += 1;
    }
    ace--;
  }
  return amount;
}

function getOutcome() {
  if (calculate(dealerHand) < calculate(playerHand)) {
    setTimeout(() => { 
      alert("YOU WIN!"); 
      clearBoard();
      show('bank');
      toggleChips();
      addBet()
      updateBalance();
      // document.getElementById("next-hand-button").style.display = "block";
      // dollars += parseInt(bet.value);
      // updateBank();
      // document.getElementById("bet").style.display = "block";
      // document.getElementById("bet-label").style.display = "flex";
    }, 1000);
  }
  else if (calculate(dealerHand) > calculate(playerHand)) {
    setTimeout(() => { 
      alert("YOU LOSE"); 
      clearBoard();
      show('bank');
      toggleChips();
      subtractBet();
      updateBalance();
      // document.getElementById("next-hand-button").style.display = "block";
      // dollars -= parseInt(bet.value);
      // updateBank();
      // document.getElementById("bet").style.display = "block";
      // document.getElementById("bet-label").style.display = "flex";
    }, 1000);
  }
  else {
    setTimeout(() => { 
      alert("PUSH"); 
      clearBoard();
      show('bank');
      toggleChips();
      // document.getElementById("next-hand-button").style.display = "block";
      // document.getElementById("bet").style.display = "block";
      // document.getElementById("bet-label").style.display = "flex";
    }, 1000);
  }
}

function dealCards() {
  hide('bank');
  playerHand = [deck[count++], deck[count++]];
  playerHand.forEach((item) => {
    createCard(item, 'player-cards');
  });

  dealerHand = [deck[count++], deck[count++]];
  dealerHand.forEach((item, index) => {
    if (index === 1) {
      createBack();
    }
    else {
      createCard(item, 'dealer-cards');
    }
  });
  show('buttons');
}


function hit() {
  const newCard = deck[count++];
  playerHand.push(newCard);
  createCard(newCard, 'player-cards');
  if (calculate(playerHand) > 21) {
    hide('buttons');
    setTimeout(() => { 
      alert("BUST, YOU LOSE");
      show('bank');
      toggleChips();
      clearBoard();
      subtractBet();
      updateBalance();
    }, 500);
  }
}

function stand() {
  hide('buttons');
  const DEALER = document.getElementById('dealer-cards');
  const flipCard = DEALER.children[1];
  flipCard.classList.remove('back');
  flipCard.classList.add('card');
  flipCard.src = "./assets/cards/" + dealerHand[1].getVal() + ".png";  
  if (calculate(dealerHand) < 17) {
    setTimeout(() => {
      const newCard = deck[count++];
      dealerHand.push(newCard);
      createCard(newCard, 'dealer-cards');
      stand();
    }, 1000);
  } 
  else if (calculate(dealerHand) > 21) {
    setTimeout(() => { 
      alert("DEALER BUST, YOU WIN!"); 
      show('bank');
      toggleChips();
      clearBoard();
      addBet();
      updateBalance();
      // document.getElementById("next-hand-button").style.display = "block";
      // dollars = dollars + parseInt(bet.value);
      // updateBank();
      // document.getElementById("bet").style.display = "block";
      // document.getElementById("bet-label").style.display = "flex";
    }, 1000);
  }
  else {
    getOutcome();
  }
  // document.getElementById("hit-button").style.display = "none";
  // document.getElementById("pass-button").style.display = "none";
}

function double() {
  doubleBet();
  updateBalance();
  hit();
  hide('buttons');
  setTimeout(() => {
    stand();
  }, 2000);
}


export {dealCards, hit, stand, double};