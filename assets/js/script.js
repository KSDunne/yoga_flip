// script.js
const memory_cards = document.querySelectorAll(".cards");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// flip card function
function flipCard() {
  if (lockBoard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // second click
  hasFlippedCard = false;
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
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    lockBoard = false;
  }, 1300);
}

// event listener which calls the 'flip card function' when a card is clicked
memory_cards.forEach((card) => card.addEventListener("click", flipCard));
