'use strict';

const vault = require('../vault.js');

const success = (data) => {
  vault.game = data.game;
  $('.login-alert').text('');

};

const getGamesSuccess = (data) => {
  vault.game = data.game;
  $('.stats-message')
  .text("You've played " + data.games.length + ' games');
};

const updateSuccess = (data) => {
  vault.game = data.game;

};

const failure = (error) => {
  //console.error(error);
  //$('.login-alert').text('Please register and sign in before playing!');
};

const createGameFailure = (error) => {
  //console.error(error);
  $('.login-alert').text('Please register and sign in before playing!');
};

module.exports = {
  failure,
  success,
  updateSuccess,
  getGamesSuccess,
  createGameFailure,
};
