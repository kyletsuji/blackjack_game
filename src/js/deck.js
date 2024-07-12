let deck = [];
let proceed = true;

const values = new Map([
  ['2', 2],
  ['3', 3],
  ['4', 4],
  ['5', 5],
  ['6', 6],
  ['7', 7],
  ['8', 8],
  ['9', 9],
  ['10', 10],
  ['J', 10],
  ['Q', 10],
  ['K', 10],
  ['A', 11]
]);

class Card {
  constructor(number, suit) {
    this.number = number;
    this.suit = suit;
  }
  getVal() {
    return this.number + this.suit;
  }
}

function createDeck() {
  const suits = ['H', 'S', 'C', 'D'];
  const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  for (let suit of suits) {
    for (let number of numbers) {
      let newCard = new Card(number, suit);
      deck.push(newCard);
    }
  }
}

function shuffle() {
  if (!proceed) {
    return;
  }
  let current = deck.length-1, random;
  while (current >= 0) {
    random = Math.floor(Math.random() * current);
    [deck[current], deck[random]] = [deck[random], deck[current]];
    current--;
  }
}

export {deck, createDeck, shuffle, values, proceed};