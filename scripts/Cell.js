import { GRID_SIZE } from './vars.js';

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
      this.live();
    } else {
      this.die();
      
    }
  }

  handleClick = () => {
    this.toggleState(!this.s);
  }

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
  }

  getNumberOfLiveNeighbors() {
    return this.neighbors.filter(n => n.s).length;
  }

  getAllPossibleNeighborCoords() {
    return [
      { x: this.x-1, y: this.y-1 },
      { x: this.x, y: this.y-1 },
      { x: this.x+1, y: this.y-1 },
      { x: this.x-1, y: this.y },
      { x: this.x+1, y: this.y },
      { x: this.x-1, y: this.y+1 },
      { x: this.x, y: this.y+1 },
      { x: this.x+1, y: this.y+1 },
    ];
  }
  
  checkBoundaries({x, y}) {
    return x > 0 && y > 0 && x <= GRID_SIZE && y <= GRID_SIZE;
  }
  
  setNextState() {
    let n = this.getNumberOfLiveNeighbors();

    if(this.s) {
      switch(true) {
        case n <= 1:  // solitude
          this.willDie();
          break;
        case n >= 4:  // overpopulation
            this.willDie();
            break;
        case n === 2 || n === 3:
          this.willLive();
          break;
      }
    } else {
      if(n === 3) {
        this.willLive();
      }
    }

  }

  willLive() {
    this.nextState = 1;
  }

  willDie() {
    this.nextState = 0;
  }

  live() {
    this.el.classList.add('live');
    this.s = 1;
  }

  die() {
    this.el.classList.remove('live');
    this.s = 0;
  }

  reRender() {
    if(this.nextState) {
      this.live();
    } else {
      this.die();
    }
  }

  setNeighbors(list) {
    let neighbors = []; 
    this.getAllPossibleNeighborCoords().forEach((coords, index) => {
      if(this.checkBoundaries(coords)) {
        neighbors.push(list[coords.y][coords.x]);
      }
    });

    this.neighbors = neighbors;
  }
}