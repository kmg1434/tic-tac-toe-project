'use strict';

const vault = require('../vault.js');

const success = (data) => {
  vault.game = data.game;
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
};
