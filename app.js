// тоглогчын ээлжийг хадгалах хувьсагч. нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах
var scores = [0, 0];

// тоглогчдын ээлжиндээ цуглуулж байгааг хадгалах хувьсагч
var roundScore = 0;

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceBtn = document.querySelector(".dice");
diceBtn.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceBtn.style.display = "block";
  diceBtn.src = "dice-" + diceNumber + ".png";
  if (activePlayer === 0 && diceNumber !== 1) {
  }
});
