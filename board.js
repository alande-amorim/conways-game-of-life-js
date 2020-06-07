import { getCells } from './cells.js'

const GRID_SIZE = 50;

export function draw(gameBoard) {
  console.log(getCells())
  getCells().forEach(cell => {
    const cellElement = document.createElement('div');
    cellElement.style.gridRowStart = cell.y;
    cellElement.style.gridColumnStart = cell.x;

    if (cell.s) {
      cellElement.classList.add('live');
    }

    gameBoard.appendChild(cellElement);
  });


}