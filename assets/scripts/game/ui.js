'use strict';

const vault = require('../vault.js');

const success = (data) => {
  vault.game = data.game;
  console.log(data);
  console.log('create success');
};

const getGamesSuccess = (data) => {
  vault.game = data.game;
  console.log(data);
  $('.stats-message')
  .text("You've played " + data.games.length + ' games');
  console.log('get Game success');
};

const updateSuccess = (data) => {
  vault.game = data.game;
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  updateSuccess,
  getGamesSuccess,
};
