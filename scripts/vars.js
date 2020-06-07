export let GRID_SIZE = document.getElementById('grid-size').value;

export const gameBoard = document.getElementById('game-board');
export const startBtn = document.querySelector('#start-btn');
export const resetBtn = document.querySelector('#reset-btn');
export const advanceBtn = document.querySelector('#advance-btn');
export const gridSizeSelect = document.querySelector('#grid-size');
export const generationInput = document.querySelector('#generation-input');

export function setGridSize(value) {
  GRID_SIZE = value;
}