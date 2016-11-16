'use strict';

const vault = require('../vault.js');

const signUpSuccess = () => {
  $('#sign-up-modal').modal('hide');
};

const signInSuccess = (data) => {
  vault.user = data.user;
  $('.button-bar').show();
  $('#sign-in-modal').modal('hide');

};

const signOutSuccess = () => {
  vault.user = null;
  $('.stats-message').text('');
  $('.win-message').text('');
  $('#sign-out-modal').modal('hide');

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
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
