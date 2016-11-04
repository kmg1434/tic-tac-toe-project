'use strict';

const vault = require('../vault.js');

const signInSuccess = (data) => {
  vault.user = data.user;
  //console.log('Successfully signed in');
  //console.log(vault.user);
};

const signOutSuccess = () => {
  vault.user = null;
  //console.log('Successfully signed out');
  //console.log(vault);
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
