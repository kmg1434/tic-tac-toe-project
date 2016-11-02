'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

const onSignUp = function (event) {
  //console.log('GOT TO onSignUp');
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
  .then(ui.success)
  .catch(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
  .then(ui.signOutSuccess)
  .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  debugger;
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.failure);
};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.sign-out-form').on('submit', onSignOut);
  $('.change-password-form').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
