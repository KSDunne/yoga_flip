// script.js
const memory_cards = document.querySelectorAll(".cards");

function flipCard() {
  this.classList.toggle("flip");
}

memory_cards.forEach((card) => card.addEventListener("click", flipCard));
