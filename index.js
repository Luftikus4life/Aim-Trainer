const startButton = document.getElementById("startbutton");
const result = document.getElementById("result");
const tryAgainButton = document.getElementById("tryagainbutton");
const headingText = document.getElementById("heading");
const fullscreen = document.getElementById("fullscreen");

/// STATE

let counter = 0;
let startTime = null;

///

startButton.addEventListener("click", startButtonclick);
function startButtonclick() {
  startTime = Date.now();
  startButton.className = "button ghost";
  tryAgainButton.className = "button ghost";
  headingText.innerText = "0/10";
  let cords = randomCords();
  fullscreen.innerHTML = createTarget(cords.x, cords.y);
  let t = document.getElementById("target");
  t.addEventListener("click", targetClick);
}

function createTarget(x, y) {
  return `<div class="target " id="target" style="top:${y}px; left: ${x}px">+</div>`;
}

function randomCords() {
  let randomX = Math.floor(Math.random() * window.innerWidth);
  let randomY = Math.floor(Math.random() * window.innerHeight);
  // let randomX = Math.floor(Math.random() * 1900);
  // let randomY = Math.floor(Math.random() * 960);
  return { x: randomX, y: randomY };
}

function targetClick() {
  counter = counter + 1;
  console.log(counter);
  fullscreen.innerHTML = "";
  let cords = randomCords();
  fullscreen.innerHTML = createTarget(cords.x, cords.y);
  let t = document.getElementById("target");
  t.addEventListener("click", targetClick);
  headingText.innerText = `${counter}/10`;
  if (counter >= 10) {
    t.className = "ghost";
    endGame();
  }
}
function endGame() {
  let endTime = Date.now();
  let ms = endTime - startTime;
  let s = (ms / 1000).toFixed(1);

  result.className = "result";
  result.innerText = `It took you ${s}s to click all targets.`;
  //   console.log(ms);
  tryAgainButton.className = "button";
  tryAgainButton.addEventListener("click", tryAgainButtonClick);
}
function tryAgainButtonClick() {
  startButtonclick();
  counter = 0;
  result.className = "ghost result";
}
