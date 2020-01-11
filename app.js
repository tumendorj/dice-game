// тоглогчын ээлжийг хадгалах хувьсагч. нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1
var activePlayer;
// Тоглогчдын цуглуулсан оноог хадгалах
var scores;
// тоглогчдын ээлжиндээ цуглуулж байгааг хадгалах хувьсагч
var roundScore;
var isNewgame;
var diceBtn = document.querySelector(".dice");

function newGame() {
  isNewgame = true;
  // тоглогчын ээлжийг хадгалах хувьсагч. нэгдүгээр тоглогч 0, хоёрдугаар тоглогч 1
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах
  scores = [0, 0];

  // тоглогчдын ээлжиндээ цуглуулж байгааг хадгалах хувьсагч
  roundScore = 0;

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  diceBtn.style.display = "none";
  document.getElementById("name-" + activePlayer).innerHTML =
    "Player " + (activePlayer + 1);
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("winner");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
}
newGame();
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewgame) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceBtn.style.display = "block";
    diceBtn.src = "dice-" + diceNumber + ".png";
    if (diceNumber !== 1) {
      //тоглогчийн оноог нэмэгдүүлэх
      roundScore += diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  }
});
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewgame) {
    // тоглогчийн тухайн оноог нийт оноон дээр нэмнэ
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      isNewgame = false;
      document.getElementById("name-" + activePlayer).innerHTML = "winner";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // тоглогчийн ээлжийг солино
      switchToNextPlayer();
    }
  }
});
document.querySelector(".btn-new").addEventListener("click", function() {
  //
  newGame();
});
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceBtn.style.display = "none";
}
