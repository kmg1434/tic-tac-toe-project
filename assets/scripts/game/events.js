'use strict';

// const getFormFields = require('../../../lib/get-form-fields.js');
const api = require('./api');
const ui = require('./ui');

const onClick = function () {

  let tile = $(this).attr('id');
  let tileID = '#' + tile;

  console.log('Clicked tile ' + tileID);

  $('tileID').html('X');

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
