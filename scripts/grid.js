import Cell from './Cell.js';
import { GRID_SIZE } from './vars.js';

export let cells;

function renderBoard(gameBoard) {
  gameBoard.innerHTML = '';
  gameBoard.style.gridTemplateRows = GRID_SIZE;
  gameBoard.style.gridTemplateColumns = GRID_SIZE;
}

function loadCells(gameBoard) {
  cells = [];
  let totalCells = GRID_SIZE*GRID_SIZE;

  for (let i=0; i<totalCells; i++) {
    let cellObj = new Cell({
      x: i % GRID_SIZE + 1,
      y: Math.floor(i/GRID_SIZE) + 1,
      s: 0
    });

    cells[cellObj.y] = cells[cellObj.y] || [];
    cells[cellObj.y][cellObj.x] = cellObj;

    gameBoard.appendChild(cellObj.el);
  }
}

export function initiate(gameBoard) {
  renderBoard(gameBoard);
  loadCells(gameBoard);

  _updateReferences();
}

export function advanceGeneration() {
  cells.flat().forEach(cell => {
    cell.setNextState();
  });
  
  cells.flat().forEach(cell => {
    cell.reRender();
  });

}

function _updateReferences() {
  cells.flat().forEach((cell) => {
    cell.setNeighbors(cells);
  });
}

window.getCells = function(){
  return cells.flat().filter(c=>c.s);
}