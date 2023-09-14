// script.js

const moveContainer = document.querySelector(".moves");
let moves = 0;

// Adding seconds to current date for countdown */
let countdownDate = new Date().setSeconds(new Date().getSeconds() + 600);

// start of main memory game logic
// credit for main memory game logic: https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae
const memory_cards = document.querySelectorAll(".cards");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// flip card function
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

// do the cards match?
// ternary operator
function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1300);

  // call add move
  addMove();
}

// credit for move counter code: https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/tree/master
//move counter
moves = 0;
moveContainer.innerHtml = 0;

function addMove() {
  moves++;
  moveContainer.innerHTML = moves;
}

// resetBoard function fixes the double-click-card-bug
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// shuffle function
(function shuffle() {
  memory_cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

// event listener which calls the 'flip card function' when a card is clicked
memory_cards.forEach((card) => card.addEventListener("click", flipCard));

// end of main memory game logic

// start of countdown timer logic
// credit of code adapted for my own use: https://github.com/adipurdila/countdown-timer/tree/main
let timerInterval;
const minutesElement = document.querySelector("#minutes"),
  secondsElement = document.querySelector("#seconds");

const formatTime = (time, string) => {
  return time == 1
    ? `<span>${time}</span> ${string}`
    : `<span>${time}</span> ${string}s`;
};

const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();
  const difference = (countdown - now) / 1000;

  if (difference < 1) {
    endCountdown();
  }

  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  minutesElement.innerHTML = formatTime(minutes, "min");
  secondsElement.innerHTML = formatTime(seconds, "sec");
};

const endCountdown = () => {
  clearInterval(timerInterval);
};

window.addEventListener("load", () => {
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
});

// end of countdown timer logic
