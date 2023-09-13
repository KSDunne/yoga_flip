// script.js
const memory_cards = document.querySelectorAll(".cards");

let hasFlippedCard = false;
let firstCard, secondCard;

// flip card function
function flipCard() {
  this.classList.toggle("flip");
  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1500);
}

// event listener which calls the 'flip card function' when a card is clicked
memory_cards.forEach((card) => card.addEventListener("click", flipCard));
