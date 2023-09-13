// script.js
const memory_cards = document.querySelectorAll(".cards");

// flip card function
function flipCard() {
  this.classList.toggle("flip");
}

// event listener which calls the flip card function
memory_cards.forEach((card) => card.addEventListener("click", flipCard));
