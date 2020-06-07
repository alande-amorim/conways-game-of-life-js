import Cell from './Cell.js';
import { GRID_SIZE } from './config.js';

let cells = [];
window.cells = cells;

export function draw(gameBoard) {
  let totalCells = GRID_SIZE*GRID_SIZE;
  
  for (let x=0; x<totalCells; x++) {
    let cellObj = new Cell({
      x: x % GRID_SIZE + 1,
      y: Math.floor(x/GRID_SIZE) + 1,
      s: 0
    });

    cells.push({
      x: cellObj.x,
      y: cellObj.y,
      obj: cellObj
    });
    
    gameBoard.appendChild(cellObj.el);
  }
}

function _updateReferences() {

  cells.forEach(({ obj }) => {
    let neighborCoords = obj.getNeighborCoords();

    neighborCoords.forEach(coord => {
      let neighbor = cells.find(cell => {
        return cell.x === coord.x && cell.y === coord.y;
      }).obj;
      
      obj.handleMiddleButtonClick = function(){
        neighbor.highlight();
      };
      obj.attachEvents();

      obj.neighbors.push(neighbor);
    });
  });
}

function highlightNeighbors(neighbors) {
  let $neighbors = cells.find(cell => {
    return neighbors.forEach(coords => {
      return cell.isItMe(coords);
    });
  });

  console.log($neighbors);

}

export function initiate(gameBoard) {
  draw(gameBoard);
  _updateReferences();
}