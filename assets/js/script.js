// script.js
// Note: A defensive design was built into this project in the reset button

const moveContainer = document.getElementById("moves");
let moves = 0;

const moveContainer2 = document.getElementById("moves2");
let moves2 = 0;

const moveContainer3 = document.getElementById("moves3");
let moves3 = 0;

// retrieve score element for scoreboard
const scoreEl = document.getElementById("score");

// start with an empty scores arrays
let bestScores = [];
let myObj2 = {};
let myScoreArray = [];
let nums = [];

// adding seconds to current date for countdown */
let countdownDate = new Date().setSeconds(new Date().getSeconds() + 100);

// for timer
let gameOn = false;

// start of main memory game logic
// credit for main memory game logic: https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae
const memory_cards = document.querySelectorAll(".cards");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

//every second after the first flip, the resetStartCountdown function is run, the '1000' in the following code block is allowing this
function resetStartCountdown() {
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
}

// flip card function
// credit for timer start onclick of flipcard function: https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game/tree/master
function flipCard() {
  if (!gameOn) {
    gameOn = true;
    countdownDate = new Date().setSeconds(new Date().getSeconds() + 100);
    clearInterval(timerInterval);
    resetStartCountdown();
  }

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
  winCountFunction();
  winNumberReached();
}

// do the cards match?
// ternary operator
function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  if (isMatch) {
    disableCards();
    return;
  }
  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  checkForMatchDisplay();
  winCountFunction();
  winNumberReached();
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
  addMove3();
  calcScore();
  save();
  view();
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

function addMove2() {
  moves2++;
  moveContainer2.innerHTML = moves2;
}

//move counter 3

function addMove3() {
  moves3++;
  moveContainer3.innerHTML = moves3;
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
const minutesElement = document.querySelector(".minutes"),
  secondsElement = document.querySelector(".seconds"),
  timerRunningContent = document.getElementById("timer-running"),
  timerEndContent = document.getElementById("timer-end"),
  winContent = document.getElementById("win-page");

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

// end of countdown timer logic

// logic for showing the pose name

function checkForMatchDisplay() {
  let isMatchDisplay = firstCard.dataset.image === secondCard.dataset.image;
  if (isMatchDisplay) {
    editPoseName();
    return;
  }
  clearPoseName();
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

// get the modal by id
var modal = document.getElementById("rules-modal-id");

// get the button that opens the modal
var button = document.getElementById("rules-btn-id");

// get the button that closes the modal
var closebtn = document.getElementsByClassName("close-rules-button")[0];

// when the user clicks on the button, open the modal
button.onclick = function () {
  modal.style.display = "flex";
};

// when the user clicks on play button, close the modal
closebtn.onclick = function () {
  modal.style.display = "none";
};

// start of logic for game win
let winNumber = 0;
function winCountFunction() {
  let winCountFunction = firstCard.dataset.image === secondCard.dataset.image;
  if (winCountFunction) {
    increaseNumber();
    return;
  }
  leaveNumber();
}

function increaseNumber() {
  winNumber += 1;
}

function leaveNumber() {
  winNumber = winNumber;
}

function winNumberReached() {
  if (winNumber === 8) {
    clearInterval(timerInterval);
    timerRunningContent.classList.add("hidden");
    timerEndContent.classList.add("hidden");
    winContent.classList.add("visible");

    // showing time on win page
    var finalTimeSec = secondsElement.innerHTML;
    document.getElementById("total-seconds").innerHTML = finalTimeSec;

    var finalTimeMin = minutesElement.innerHTML;
    document.getElementById("total-minutes").innerHTML = finalTimeMin;
  }
}
// end of logic for game win

//start of logic for when the main reset button is clicked, this contains a defensive design because it includes an 'are you sure you want to reset the game? modal
// full reset function
function reset() {
  location.href = location.href;
}

// start of logic for 'are you sure you want to reset?' modal, which appears when the reset button on the main game page is clicked
// credit for rules modal logic: https://www.w3schools.com/howto/howto_css_modals.asp

// get the modal by id
var sureModal = document.getElementById("sure-modal-id");

// getting the reset current game button that opens the modal
var mainResetButton = document.getElementById("reset-button-main-page");

// get the button that closes the modal
var continueButton = document.getElementsByClassName(
  "continue-playing-button"
)[0];

// when the user clicks on the button, open the modal
mainResetButton.onclick = function () {
  sureModal.style.display = "flex";
};

// when the user clicks on closebtn, close the modal
continueButton.onclick = function () {
  sureModal.style.display = "none";
};

// when the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == sureModal) {
    sureModal.style.display = "none";
  }
};

// start of logic for scoreboard

// the following adds a move number to the end of an array every time a move is made

function calcScore() {
  let score = moves;
  scoreEl.innerHTML = score;
  bestScores.push(score);
}

// a new array saves to local storage everytime the move number goes up
function save() {
  var new_data = Math.max(...bestScores);
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }
  var old_data = JSON.parse(localStorage.getItem("data"));
  old_data.push(new_data);

  localStorage.setItem("data", JSON.stringify(old_data));
}

function view() {
  myObj2 = { data: JSON.parse(localStorage.getItem("data")) };
  myScoreArray = myObj2.data;

  nums = myScoreArray.map(function (str) {
    return parseInt(str);
  });

  nums = Math.max(...nums);
  document.getElementById("best-score").innerHTML = nums;
}
