'use strict';

const app = require('../app.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log('Successfully signed in');
  console.log(app.user);
  debugger;
};

const signOutSuccess = () => {
  app.user = null;
  console.log('Successfully signed out');
  console.log(app);
};

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.');
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
