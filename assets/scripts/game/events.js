'use strict';

// const getFormFields = require('../../../lib/get-form-fields.js');
const api = require('./api');
const ui = require('./ui');
const glob = require('./global.js');

const onGetAll = function (event) {
  event.preventDefault();
  api.getAll()
    .then(ui.success)
    .catch(ui.failure);
};

const onCreateGame = function (event) {
  event.preventDefault();
  api.createGame()
    .then(ui.success)
    .catch(ui.failure);
};

const onFindGame = function (event) {
  event.preventDefault();
  api.findGame()
    .then(ui.success)
    .catch(ui.failure);
};

const onJoinGame = function (event) {
  event.preventDefault();
  api.joinGame()
    .then(ui.success)
    .catch(ui.failure);
};

const onUpdateGame = function () {
  let data = {
    'game': {
      'cell': {
        'index': glob.vars.lastI,
        'value': glob.vars.lastMove,
      },
      'over': glob.vars.gameOver,
    },
  };
  api.updateGame(data)
    .then(ui.success)
    .catch(ui.failure);
};

const winCheck = function () {

  let b = glob.vars.board;
  let gameOver = glob.vars.gameOver;

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

  let tile = $(this).attr('id'); // grabs id from tile
  let tileId = '#' + tile; // add # to front
  let i = +(tile.replace(/\D/g, '')); // tile index (removes letters)
  glob.vars.lastI = i;

  // Valid Move check
  if (!glob.vars.board[i]) { // if not yet clicked
    if (glob.vars.xTurn) {
      $(tileId).html('X');
      glob.vars.board[i] = 'x';
      glob.vars.lastMove = 'x';
      onUpdateGame();
    } else {
      $(tileId).html('O');
      glob.vars.board[i] = 'o';
      glob.vars.lastMove = 'o';
      onUpdateGame();
    }

    glob.vars.turnCount++;
    glob.vars.xTurn = !glob.vars.xTurn; // change teams
  }

  //console.log('last move: ' + glob.vars.lastMove);
  //console.log('last index: ' + glob.vars.lastI);

  if (winCheck()) { // on win, turn off click
    $('.col-xs-4').css('pointer-events', 'none');

  };

  if (glob.vars.turnCount === 9) {   // TIE GAME CHECK
    console.log('TIE GAME');
    glob.vars.gameOver = true;

  }

};

const newGame = function () {

  // if person is signed in, do all the stuff

  // if (app.user.token === AIP.user.token ) then do stuff!

  glob.vars.turnCount = 0;
  glob.vars.board = [];
  glob.vars.xTurn = true;
  glob.vars.gameOver = false;

  $('#tile0').html('_');
  $('#tile1').html('_');
  $('#tile2').html('_');
  $('#tile3').html('_');
  $('#tile4').html('_');
  $('#tile5').html('_');
  $('#tile6').html('_');
  $('#tile7').html('_');
  $('#tile8').html('_');

  $('.col-xs-4').css('pointer-events', 'auto');

};

const addBoardHandlers = () => {

  $('.col-xs-4').css('pointer-events', 'none');

  $('#tile0').on('click', onClick);
  $('#tile1').on('click', onClick);
  $('#tile2').on('click', onClick);
  $('#tile3').on('click', onClick);
  $('#tile4').on('click', onClick);
  $('#tile5').on('click', onClick);
  $('#tile6').on('click', onClick);
  $('#tile7').on('click', onClick);
  $('#tile8').on('click', onClick);

  $('.new-game-button').on('click', onCreateGame);
  $('.new-game-button').on('click', newGame);

};

module.exports = {
  addBoardHandlers,
};
