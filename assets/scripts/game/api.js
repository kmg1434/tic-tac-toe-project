'use strict';

const vault = require('../vault.js');

const getAllGames = function () {
  return $.ajax({
    url: vault.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
  });
};

const createGame = function () {
  return $.ajax({
    url: vault.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
    game: {},
  });
};

const updateGame = function (data) {
  return $.ajax({
    url: vault.host + '/games/' + vault.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
    data,
  });
};

module.exports = {
  createGame,
  updateGame,
  getAllGames,
};
