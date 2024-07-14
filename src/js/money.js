let bet = 0;
let balance = 200;

function setBet(value) {
  bet = value;
}

function getBet() {
  return '$' + bet;
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

function hasEnough() {
  if (bet > balance) {
    return false;
  }
  else {
    return true;
  }
}

function canDouble() {
  if (bet * 2 > balance) {
    return false;
  }
  else {
    return true;
  }
}

function updateBalance() {
  document.getElementById('balance').innerHTML = "BET: $" + bet + "<br> BALANCE: $" + balance;
}


export {setBet, updateBalance, subtractBet, addBet, doubleBet, hasEnough, canDouble, getBet}