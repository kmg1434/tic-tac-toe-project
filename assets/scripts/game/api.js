'use strict';

const vault = require('../vault.js');

const getAllGames = function (data) {
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

const findGame  = function (data) {
  return $.ajax({
    url: vault.host + '/games/' + vault.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
  });
};

const joinGame = function (data) {
  return $.ajax({
    url: vault.host + '/games/' + vault.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
  });
};

const updateGame = function (data) {
  return $.ajax({
    url: vault.host + '/games/' + vault.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
  });
};

module.exports = {
  getAllGames,
  createGame,
  findGame,
  joinGame,
  updateGame,
};
