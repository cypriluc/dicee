var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

let leftDice = document.querySelector(".img1");
leftDice.setAttribute("src", `images/dice${randomNumber1}.png`);

let rightDice = document.querySelector(".img2");
rightDice.setAttribute("src", `images/dice${randomNumber2}.png`);

let title = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  title.textContent = "🏆 Player 1 Wins!"
} else if (randomNumber1 === randomNumber2) {
  title.textContent = "Draw!"
} else {
  title.textContent = "Player 2 wins 🏆!"
};
