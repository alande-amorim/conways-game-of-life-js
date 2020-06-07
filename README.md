<h1>
  Conway's Game of Life in HTML5 <br><br>
  <img src=".github/screen.gif" alt="Screenshot">
</h1>

## Live Demo
https://alande-amorim.github.io/conways-game-of-life-js/

## This project
This is a tribute to famous british mathematician John Conway that passed away in April 2020 at age of 82. This is my implementation of his famous creation The Game of Life.

## Techs
Just simple stuff, nothing fancy.
- HTML
- CSS
- Javascript

## What is it?
The Game of Life is a cellular automaton by the British mathematician John Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state and very simple rules, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

## Rules

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## How to play
- Click on the tiles of the board to draw any pattern you want.
- Click 'Play' and watch what happens.
- Watch. Can you preddict what will happen next?

## Patterns
Many different patterns can be observed in the Game of Life which are classified according to their behavior. 
They are categorized into: still (does not change over generations), oscillators (oscillates between two or more states) or spaceships (oscilates shape while moving around).
<table>
  <tr>
    <td>
      <table>
        <tr>
          <th colspan="2">Still lifes</th>
        </tr>
        <tr>
          <td>Block</td>
          <td><img alt="Game of life block with border.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/66px-Game_of_life_block_with_border.svg.png" width="66" height="66"></td>
        </tr>
        <tr>
          <td>Bee-hive</td>
          <td><img alt="Game of life beehive.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/98px-Game_of_life_beehive.svg.png" width="98" height="82"></td>
        </tr>
        <tr>
          <td>Loaf</td>
          <td><img alt="Game of life loaf.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game_of_life_loaf.svg/98px-Game_of_life_loaf.svg.png" width="98" height="98"></td>
        </tr>
        <tr>
          <td>Boat</td>
          <td><img alt="Game of life boat.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Game_of_life_boat.svg/82px-Game_of_life_boat.svg.png" width="82" height="82"></td>
        </tr>
        <tr>
          <td>Tub</td>
          <td><img alt="Game of life flower.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/82px-Game_of_life_flower.svg.png" width="82" height="82"></td>
        </tr>
      </table>
      <p>
      </p>
    </td>
    <td>
      <table>
        <tr>
          <th colspan="2">Oscillators
          </th>
        </tr>
        <tr>
          <td>Blinker<br>(period 2)</td>
          <td><img alt="Game of life blinker.gif" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif" width="82" height="82"></td>
        </tr>
        <tr>
          <td>Toad<br>(period 2)</td>
          <td><img alt="Game of life toad.gif" src="https://upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif" width="98" height="98"></td>
        </tr>
        <tr>
          <td>Beacon<br>(period 2)</td>
          <td><img alt="Game of life beacon.gif" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif" width="98" height="98"></td>
        </tr>
        <tr>
          <td>Pulsar<br>(period 3)</td>
          <td><img alt="Game of life pulsar.gif" src="https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif" width="137" height="137"></td>
        </tr>
        <tr>
          <td>Penta-<br>decathlon<br>(period&nbsp;15)</td>
          <td><img alt="I-Column.gif" src="https://upload.wikimedia.org/wikipedia/commons/f/fb/I-Column.gif" width="89" height="145"></td>
        </tr>
      </table>
    </td>
    <td>
      <table>
        <tr>
          <th colspan="2">Spaceships</th>
        </tr>
        <tr>
          <td>Glider</td>
          <td><img alt="Game of life animated glider.gif" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif" width="84" height="84"></td>
        </tr>
        <tr>
          <td>Light-<br>weight<br>spaceship<br>(LWSS)</td>
          <td><img alt="Game of life animated LWSS.gif" src="https://upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif" width="126" height="98"></td>
        </tr>
        <tr>
          <td>Middle-<br>weight<br>spaceship<br>(MWSS)</td>
          <td><img alt="Animated Mwss.gif" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Animated_Mwss.gif" width="162" height="146"></td>
        </tr>
        <tr>
          <td>Heavy-<br>weight<br>spaceship<br>(HWSS)</td>
          <td><img alt="Animated Hwss.gif" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Animated_Hwss.gif" width="178" height="146"></td>
        </tr>
      </table>
    </td>
  </tr>
</table>

source: [wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns)