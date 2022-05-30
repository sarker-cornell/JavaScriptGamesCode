console.log("Hello world somu");
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime =0;
let elapsedTime = 0;
let currentTime =0;
let paused = true;
let interval_Id;
let hrs=0;
let mins=0;
let seconds=0;
let milliseconds=0;

startBtn.addEventListener("click", ()=>{
  console.log("Okay click")
  if(paused) {
    paused=false;
    startTime = Date.now() - elapsedTime;
    interval_Id = setInterval(updateTime, 200);
  }
});

pauseBtn.addEventListener("click", ()=>{
  if(!paused) {
    paused=true;
    elapsedTime - Date.now() - startTime;
    clearInterval(interval_Id);
  }
});

resetBtn.addEventListener("click", ()=>{
  paused = true;
  clearInterval(interval_Id);
  startTime =0;
  elapsedTime = 0;
  currentTime =0;

  hrs=0;
  mins=0;
  seconds=0;
  milliseconds=0;
  timeDisplay.textContent= `00:00:00`;

});

function updateTime(){
  elapsedTime = Date.now() - startTime;

  milliseconds = Math.floor((elapsedTime) % 1000);
  seconds = Math.floor((elapsedTime/1000) % 60);
  mins = Math.floor((elapsedTime/(1000*60)) % 60);
  hrs = Math.floor((elapsedTime/(1000*60*60)) % 60);

  milliseconds=millipad(milliseconds);
  seconds=pad(seconds);
  mins = pad(mins);
  hrs = pad(hrs);

  //timeDisplay.textContent= `${hrs}:${mins}:${seconds}`;
  timeDisplay.textContent= `${hrs}:${mins}:${seconds}:${milliseconds}`;
  //timeDisplay.textContent=  Date.now();

  function pad(unit) {
    let padout = ( (("0")+unit).length > 2? unit : "0"+unit );
    //console.log(padout);
    return padout
  }

  function millipad(unit) {

    //console.log((unit).length);
    return unit
  }
}
