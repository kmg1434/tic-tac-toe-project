'use strict';

const vault = require('../vault.js');
const glob = require('./global.js');

const getAllGames = function (player_x) {
  return $.ajax({
    url: vault.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
    player_x,
  });
};

const createGame = function () { // works!
  return $.ajax({
    url: vault.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
    game: {},
  });
};

const updateGame = (data) =>
  $.ajax({
    url: vault.host + '/games/' + vault.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
    data,
  });

module.exports = {
  createGame,
  updateGame,
  getAllGames,
};
