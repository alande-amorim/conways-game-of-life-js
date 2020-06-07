import { gameBoard, TICK_DURATION } from './vars.js';
import { initiate } from './grid.js';
import { isRunning, tick } from './controls.js';

let lastRenderTime = 0;

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLsastRender = (currentTime - lastRenderTime)/1000;
  if (secondsSinceLsastRender < TICK_DURATION) return;
  
  lastRenderTime = currentTime;

  if(isRunning) return tick();
}

function render() {
  initiate(gameBoard);
}

window.requestAnimationFrame(main);

render();