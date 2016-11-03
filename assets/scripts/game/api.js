'use strict';

const app = require('../app');

const getAll = function (data) {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.users.token,
    },
  });
};

const createGame = function (data) {
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.users.token,
    },
  });
};

const findGame  = function (data) {
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.users.token,
    },
  });
};

const joinGame = function (data) {
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.users.token,
    },
  });
};

const updateGame = function (data) {
  return $.ajax({
    url: app.host + '/games/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.users.token,
    },
  });
};

module.exports = {
  getAll,
  createGame,
  findGame,
  joinGame,
  updateGame,
};
