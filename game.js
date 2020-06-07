import { initiate } from './cells.js';

let iteration = 0;
let lastRenderTime = 0;
let run = false;


const gameBoard = document.getElementById('game-board');

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLsastRender = (currentTime - lastRenderTime)/1000;

  lastRenderTime = currentTime;

  if(run) {
    update();
    draw();
  }
}

window.requestAnimationFrame(main);


function update() {
  iteration++;
}

function draw() {
  initiate(gameBoard);
}

draw();