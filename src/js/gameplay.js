import {hide, createCard, createBack, show, clearBoard, remove} from './displays.js';
import {deck, values} from './deck.js';
import {updateBalance, subtractBet, addBet, doubleBet, getBet} from './money.js';
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
      alert("You won " + getBet()); 
      clearBoard();
      show('bank');
      toggleChips();
      addBet()
      updateBalance();
    }, 1000);
  }
  else if (calculate(dealerHand) > calculate(playerHand)) {
    setTimeout(() => { 
      alert("You lost " + getBet()); 
      clearBoard();
      show('bank');
      toggleChips();
      subtractBet();
      updateBalance();
    }, 1000);
  }
  else {
    setTimeout(() => { 
      alert("PUSH"); 
      clearBoard();
      show('bank');
      toggleChips();
    }, 1000);
  }
}

function dealCards() {
  hide('bank');
  playerHand = [deck[count++], deck[count++]];
  dealerHand = [deck[count++], deck[count++]];
  createCard(playerHand[0], 'player-cards');
  setTimeout(() => {
    createCard(dealerHand[0], 'dealer-cards');
  }, 300);
  setTimeout(() => {
    createCard(playerHand[1], 'player-cards');
  }, 600);
  setTimeout(() => {
    createBack();
  }, 900);
  show('buttons');
}

function hit() {
  const newCard = deck[count++];
  playerHand.push(newCard);
  createCard(newCard, 'player-cards');
  if (calculate(playerHand) > 21) {
    remove('hit');
    remove('stand');
    hide('buttons');
    setTimeout(() => { 
      alert("BUST, you lost " + getBet());
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
      alert("DEALER BUST, you won " + getBet()); 
      show('bank');
      toggleChips();
      clearBoard();
      addBet();
      updateBalance();
    }, 1000);
  }
  else {
    getOutcome();
  }
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