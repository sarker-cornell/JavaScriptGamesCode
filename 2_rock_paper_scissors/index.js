const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText= document.querySelector('#resultText');

const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

console.log(choiceBtns)
choiceBtns.forEach(button => button.addEventListener("click", ()=>{
  player=button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent=`Computer: ${computer}`;
  resultText.textContent= checkWinner();
}));

function computerTurn(){
  const randNum= Math.floor(Math.random()*3+1);
  if (randNum==1) {
    computer="ROCK"
  } else if (randNum==2) {
    computer="PAPER"
  } else {
    computer="SCISSORS"
  }
}

function checkWinner(){
  if(player==computer) {
    return "Draw!"
  } else if (computer =="ROCK") {
    return (player=="PAPER")? "Player Wins" : "Computer Wins1"
  } else if (computer =="PAPER") {
    return (player=="SCISSORS")? "Player Wins" : "Computer Wins2"
  } else if (computer=="SCISSORS") {
    return (player=="ROCK")? "Player Wins" : "Computer Wins3"
  }
}
