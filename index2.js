const card = document.querySelector(".card");
const front = document.querySelector(".front");
const back = document.querySelector(".back");

card.addEventListener("click", function () {
  front.classList.toggle("frontTurn");
  back.classList.toggle("backTurn");
});