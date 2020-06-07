import { initiate, advanceGeneration } from './grid.js';
import { 
  gameBoard,
  startBtn,
  resetBtn,
  advanceBtn,
  gridSizeSelect,
  generationInput,
  setGridSize,
} from './vars.js';

let generation = 0;
export let isRunning = 0;

function updateGenerationCounter() {
  generationInput.value = generation;
}

export function tick() {
  generation++;
  updateGenerationCounter();
  advanceGeneration();
}

function resetGame() {
  generation = 0;
  stopGame();
  updateGenerationCounter();
  initiate(gameBoard);
}

function stopGame() {
  isRunning = 0;
  startBtn.innerHTML = 'Play';
}

function startGame() {
  isRunning = 1;
  startBtn.innerHTML = 'Stop';
}

function handleStartBtnClick() {
  if(isRunning) {
    stopGame();
  } else {
    startGame();
  }
}

function handleGridSizeChange(e) {
  setGridSize(this.value);
  resetGame();
}

advanceBtn.addEventListener('click', tick);
resetBtn.addEventListener('click', resetGame);
startBtn.addEventListener('click', handleStartBtnClick);
gridSizeSelect.addEventListener('change', handleGridSizeChange);