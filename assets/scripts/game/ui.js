'use strict';

const vault = require('../vault.js');
const glob = require('./global.js');

const success = (data) => {
  vault.game = data.game;
  $('.login-alert').text('');

};

const createGameSuccess = (data) => {
  vault.game = data.game;
  $('.login-alert').text('');

};

// data.games.length should only increment on win or tie.
const getGamesSuccess = (data) => {
  $('.stats-message')
  .text("You've played " + data.games.length + ' games');
};

const updateSuccess = (data) => {
  vault.game = data.game;

};

const failure = (error) => {
  $('.login-alert').text('FAIL!');
};

const createGameFailure = () => {
  $('.login-alert').text('Please register and sign in before playing!');
};

module.exports = {
  success,
  failure,
  updateSuccess,
  getGamesSuccess,
  createGameSuccess,
  createGameFailure,
};
