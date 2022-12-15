"use strict";

//Selecting Elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0E = document.querySelector('.player--0');
const player1E = document.querySelector('.player--1');

//Starting scores

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
//Rolling dice

btnRoll.addEventListener("click", function () {
  //1. Generate random dice roll

  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  //3. Check for 1: if true, switch player

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0E.classList.toggle('player--active');
    player1E.classList.toggle('player--active');
  }
});

