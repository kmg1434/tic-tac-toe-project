'use strict';

const vault = require('../vault.js');

const success = (data) => {
  vault.game = data.game;
  $('.login-alert').text('');

  //console.log(data);
  //console.log('create success');
};

const getGamesSuccess = (data) => {
  vault.game = data.game;
  //console.log(data);
  $('.stats-message')
  .text("You've played " + data.games.length + ' games');
  //console.log('get Game success');
};

const updateSuccess = (data) => {
  vault.game = data.game;
  //console.log(data);
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
  createGameFailure
};
