'use strict';

// const getFormFields = require('../../../lib/get-form-fields.js');
//const api = require('./api');
//const ui = require('./ui');
const glob = require('./global.js');

// const createGame = function () {
//   // some shit
//
// };

const winCheck = function () {

  let b = glob.vars.board;
  let gameOver = false;

  // HORIZONTAL CHECKS
  if (b[0] && (b[0] === b[1]) && (b[1] === b[2])) {
    console.log(b[0] + ' wins!');
    gameOver = true;
  } else if (b[3] && (b[3] === b[4]) && (b[4] === b[5])) {
    console.log(b[3] + ' wins!');
    gameOver = true;
  } else if (b[6] && (b[6] === b[7]) && (b[7] === b[8])) {
    console.log(b[6] + ' wins!');
    gameOver = true;
  }

  // VERTICAL CHECKS
  if (b[0] && (b[0] === b[3]) && (b[3] === b[6])) {
    console.log(b[0] + ' wins!');
    gameOver = true;
  } else if (b[1] && (b[1] === b[4]) && (b[4] === b[7])) {
    console.log(b[1] + ' wins!');
    gameOver = true;
  } else if (b[2] && (b[2] === b[5]) && (b[5] === b[8])) {
    console.log(b[2] + ' wins!');
    gameOver = true;
  }

  // DIAGONAL CHECKS
  if (b[0] && (b[0] === b[4]) && (b[4] === b[8])) {
    console.log(b[0] + ' wins!');
    gameOver = true;
  } else if (b[2] && (b[2] === b[4]) && (b[4] === b[6])) {
    console.log(b[2] + ' wins!');
    gameOver = true;
  }

  return gameOver;
};

const onClick = function (event) {

  event.preventDefault();

  let tile = $(this).attr('id');
  let tileId = '#' + tile;
  let i = +(tile.replace(/\D/g, '')); // tile number

  // Valid Move check
  if (!glob.vars.board[i]) { // if not yet clicked
    if (glob.vars.xTurn) {
      $(tileId).html('X');
      glob.vars.board[i] = 'x';
    } else {
      $(tileId).html('O');
      glob.vars.board[i] = 'o';
    }

  }

  // TIE GAME CHECK
  if (!winCheck()) {
    glob.vars.xTurn = !glob.vars.xTurn; // change teams
    glob.vars.turnCount++;
    if (glob.vars.turnCount === 9) {
      console.log('TIE GAME');
    }
  }

  console.table(glob.vars.board);

};

const addBoardHandlers = () => {
  $('#tile0').on('click', onClick);
  $('#tile1').on('click', onClick);
  $('#tile2').on('click', onClick);
  $('#tile3').on('click', onClick);
  $('#tile4').on('click', onClick);
  $('#tile5').on('click', onClick);
  $('#tile6').on('click', onClick);
  $('#tile7').on('click', onClick);
  $('#tile8').on('click', onClick);

};

module.exports = {
  addBoardHandlers,
};
