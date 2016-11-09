'use strict';

const vault = require('../vault.js');

const signInSuccess = (data) => {
  vault.user = data.user;
  $('.button-bar').show();

};

const signOutSuccess = () => {
  vault.user = null;
  $('.stats-message').text('');
  $('.win-message').text('');

};

const changePasswordSuccess = () => {
  //console.log('Password Successfully Changed.');
};

const success = () => {
  //console.log(data);
};

const failure = () => {
  //console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
