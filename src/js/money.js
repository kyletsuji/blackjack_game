let bet = 0;
let balance = 200;

function setBet(value) {
  bet = value;
}

function doubleBet() {
  bet += bet;
}

function subtractBet() {
  balance -= bet;
}

function addBet() {
  balance += bet;
}

function updateBalance() {
  document.getElementById('balance').innerHTML = "Bet: $" + bet + "<br> Balance: " + balance;
}


export {setBet, updateBalance, subtractBet, addBet, doubleBet}