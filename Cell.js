import { GRID_SIZE } from './config.js';

export default class Cell {

  constructor({ x, y }) {
    this.x = x;
    this.y = y;
    this.s = 0;
    this.neighbors = [];

    this.render();
    this.attachEvents();
  }

  toggleState(newState) {
    if (newState) {
      this.el.classList.add('live');
      this.s = 1;
    } else {
      this.el.classList.remove('live');
      this.s = 0;
    }
  }

  handleClick = () => {
    this.toggleState(!this.s);
  }

  // handleMiddleButtonClick(callback) {
  //   callback();
  // }

  render() {
    const cellElement = document.createElement('div');
    cellElement.style.gridRowStart = this.y;
    cellElement.style.gridColumnStart = this.x;
    if (this.s) {
      cellElement.classList.add('live');
    }

    this.el = cellElement;
  }

  attachEvents() {
    let that = this;

    this.el.removeEventListener('click', that.handleClick);
    this.el.removeEventListener('auxclick', that.handleMiddleButtonClick);
    
    this.el.addEventListener('click', that.handleClick);
    this.el.addEventListener('auxclick', that.handleMiddleButtonClick);
  }

  highlight() {
    this.el.classList.add('pulse');
    setTimeout(() => {
      this.el.classList.remove('pulse');
    }, 1200);
    // this.el.style.background = 'red';
  }

  getNeighborCoords() {
    let allPossibleNeighbors = [
      { x: this.x-1, y: this.y-1 },
      { x: this.x, y: this.y-1 },
      { x: this.x+1, y: this.y-1 },
      { x: this.x-1, y: this.y },
      { x: this.x+1, y: this.y },
      { x: this.x-1, y: this.y+1 },
      { x: this.x, y: this.y+1 },
      { x: this.x+1, y: this.y+1 },
    ];

    return allPossibleNeighbors.filter((item, index) => {
      return this.checkBoundaries(item);
    });
  }

  checkBoundaries({x, y}) {
    return x > 0 && y > 0 && x <= GRID_SIZE && y <= GRID_SIZE;
  }

  isItMe({x, y}) {
    console.log(x, y);
    return this.x===x && this.y === y ? this : {};
  }

}