'use strict';

// const getFormFields = require('../../../lib/get-form-fields.js');
//const api = require('./api');
//const ui = require('./ui');
const glob = require('./global.js');

// const createGame = function () {
//   // some shit
//
// };

const onClick = function (event) {

  event.preventDefault();

  let tile = $(this).attr('id');
  let tileId = '#' + tile;
  let i = +(tile.replace(/\D/g, '')); // tile number
  console.log('Clicked tile ' + i);

  if (!glob.vars.board[i]) { // if not yet clicked

    if (glob.vars.xTurn) {

      $(tileId).html('X');
      glob.vars.board[i] = 'x';

    } else {
      $(tileId).html('O');
      glob.vars.board[i] = 'o';

    }

    //global.vars.board[tileId] = 'x';
    glob.vars.xTurn = !glob.vars.xTurn; // change teams

  }

  console.log('X turn? ' + glob.vars.xTurn);
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
