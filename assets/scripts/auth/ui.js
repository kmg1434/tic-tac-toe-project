'use strict';

const app = require('../app.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
};

const signOutSuccess = () => {
  app.user = null;
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
