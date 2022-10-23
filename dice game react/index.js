var randomvariable1 = Math.floor(Math.random() * 6) + 1;
var ans = "images/dice" + randomvariable1 + ".png";
document.querySelector(".img1").setAttribute("src", ans);

var randomvariable2 = Math.floor(Math.random() * 6) + 1;
var ans2 = "images/dice" + randomvariable2 + ".png";
document.querySelector(".img2").setAttribute("src", ans2);

if (randomvariable1 > randomvariable2) {
  document.querySelector("h1").textContent = "Player1 wins🚩";
} else if (randomvariable1 == randomvariable2) {
  document.querySelector("h1").textContent = "it's a draw";
} else {
  document.querySelector("h1").textContent = "Player2 wins🚩";
}
