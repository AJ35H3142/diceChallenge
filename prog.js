var i = 1;
var gameNumber = 0;
var gameNumberName = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Game Over",
];
var diceImage = [
  "./dice6.png",
  "./dice1.png",
  "./dice2.png",
  "./dice3.png",
  "./dice4.png",
  "./dice5.png",
  "./dice6.png",
];
var player1 = document.querySelector(".P1");
var player2 = document.querySelector(".P2");
var btnStartGame = document.querySelector(".btn");
var rndmPlayer1 = 0;
var rndmPlayer2 = 0;
// var diceImgPlayer1 = document.querySelector(".diceImg1").getAttribute("src");
// var diceImgPlayer2 = document.querySelector(".diceImg2").getAttribute("src");
// btnStartGame.addEventListener("click", startClick);
startClick();

function startClick() {
  if (btnStartGame.textContent === "Start") {
    name1 = prompt("Enter First player's name");
    name2 = prompt("Enter Second player's name");
    player1.textContent = name1.toUpperCase();
    player2.textContent = name2.toUpperCase();
  }
  gameStart();
}
function gameStart() {
  if (btnStartGame.textContent !== "Game Over") {
    rndmPlayer1 = Math.floor(Math.random() * 6) + 1;
    rndmPlayer2 = Math.floor(Math.random() * 6) + 1;
    document
      .querySelector(".diceImg1")
      .setAttribute("src", diceImage[rndmPlayer1]);
    document
      .querySelector(".diceImg2")
      .setAttribute("src", diceImage[rndmPlayer2]);
    if (rndmPlayer2 - rndmPlayer1 > 0) {
      document.querySelector("h1").textContent = player2.textContent + " wins";
    } else if (rndmPlayer2 - rndmPlayer1 === 0) {
      document.querySelector("h1").textContent = "Its a Draw";
    } else {
      document.querySelector("h1").textContent = player1.textContent + " wins";
    }
    btnStartGame.addEventListener("click", startClick);
    gameNumber++;
    btnStartGame.textContent = "Game " + gameNumberName[gameNumber];
  }
}
