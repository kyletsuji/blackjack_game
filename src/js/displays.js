import {deck, createDeck, shuffle, values} from './deck.js';

function createCard(card, playerDealer) {
  const newCardModel = document.createElement('img');
  newCardModel.classList.add('card');
  newCardModel.src = "./assets/cards/" + card.getVal() + ".png";
  var container = document.getElementById(playerDealer);
  container.appendChild(newCardModel);
}

function createBack() {
  const newCardModel = document.createElement('img');
  newCardModel.classList.add('back');
  newCardModel.src = "./assets/cards/back.png";
  var container = document.getElementById('dealer-cards');
  container.appendChild(newCardModel);
}

function hide(element) {
  var el = document.getElementById(element);
  if (el) {
    // el.style.visibility = "hidden";
    el.style.transition = "opacity 1s";
    el.style.opacity = "0";
  }
  else {
    console.log("element not found");
  }
}

function show(element) {
  var el = document.getElementById(element);
  el.style.visibility = "visible";
  el.style.transition = "opacity 1s";
  el.style.opacity = "1";
}

function clearBoard() {
  document.getElementById('dealer-cards').innerHTML = '';
  document.getElementById('player-cards').innerHTML = '';
}


export {hide, createCard, createBack, show, clearBoard};