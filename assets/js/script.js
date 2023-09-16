// script.js

const moveContainer = document.querySelector(".moves");
let moves = 0;

const moveContainer2 = document.querySelector(".moves2");
let moves2 = 0;

// adding seconds to current date for countdown */
let countdownDate = new Date().setSeconds(new Date().getSeconds() + 10);

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
  checkForMatchDisplay();
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
  checkForMatchDisplay();
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1300);

  // call 'add move' on both the game screen, and time out screen so that it shows how many moves you made when you time out
  addMove();
  addMove2();
}

// credit for move counter code: https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/tree/master
//move counter
moves = 0;
moveContainer.innerHtml = 0;

function addMove() {
  moves++;
  moveContainer.innerHTML = moves;
}

//move counter 2
moves2 = 0;
moveContainer2.innerHtml = 0;

function addMove2() {
  moves2++;
  moveContainer2.innerHTML = moves2;
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
  secondsElement = document.querySelector("#seconds"),
  timerRunningContent = document.querySelector("#timer-running"),
  timerEndContent = document.querySelector("#timer-end"),
  winContent = document.querySelector("#win-page");

// template literals to format the time for whether it is singlular or multiples
const formatTime = (time, string) => {
  return time == 1
    ? `<span>${time}</span> ${string}`
    : `<span>${time}</span> ${string}s`;
};

const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();
  const difference = (countdown - now) / 1000;

  // the following if statement makes sure the timer stops before going into negative numbers
  if (difference < 1) {
    endCountdown();
  }

  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  minutesElement.innerHTML = formatTime(minutes, "min");
  secondsElement.innerHTML = formatTime(seconds, "sec");
};

//endCountdown function is called right before the timer goes into negative numbers
const endCountdown = () => {
  clearInterval(timerInterval);
  timerRunningContent.classList.add("hidden");
  winContent.classList.add("hidden");
  timerEndContent.classList.add("visible");
};

//every second the startCountdown function is run, the '1000' in the following code block is allowing this
window.addEventListener("load", () => {
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
});

// end of countdown timer logic

// logic for showing the pose name

function checkForMatchDisplay() {
  let isMatchDisplay = firstCard.dataset.image === secondCard.dataset.image;
  isMatchDisplay ? editPoseName() : clearPoseName();
}

function editPoseName() {
  let poseNameDisplay = document.getElementById("pose-name-display");
  poseNameDisplay.innerHTML = `pose: ${firstCard.dataset.image}`;
}

function clearPoseName() {
  let poseNameDisplay = document.getElementById("pose-name-display");
  poseNameDisplay.innerHTML = `pose: Not Matched`;
}

// start of logic for rules modal
// credit for rules modal logic: https://www.w3schools.com/howto/howto_css_modals.asp

// get the modal
var modal = document.getElementById("rules-modal-id");

// get the button that opens the modal
var button = document.getElementById("rules-btn-id");

// get the element that closes the modal
var closebtn = document.getElementsByClassName("close-rules-button")[0];

// when the user clicks on the button, open the modal
button.onclick = function () {
  modal.style.display = "flex";
};

// when the user clicks on closebtn, close the modal
closebtn.onclick = function () {
  modal.style.display = "none";
};

// when the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// start of logic for game win
function winMoves() {
  if (moveContainer.innerHtml === 8) gameWin();
}

function gameWin() {
  winEndCountdown();
}

const winEndCountdown = () => {
  clearInterval(timerInterval);
  timerRunningContent.classList.add("hidden");
  timerEndContent.classList.add("hidden");
  winContent.classList.add("visible");
};

// start of logic for when the reset button is clicked
