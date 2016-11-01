'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

const onSignUp = function (event) {
  //console.log('GOT TO onSignUp');
  event.preventDefault();
  let data = getFormFields(this);
  debugger;
  api.signUp(data)
  .then(ui.success)
  .catch(ui.failure);
};

// const onSignIn = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.signIn(data)
//   .done(ui.signInSuccess)
//   .fail(ui.fail);
// };

// const onSignOut = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.signOut(data)
//   .done(ui.signOutSuccess)
//   .fail(ui.fail);
// };
//
// const onChangePassword = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.changePassword(data)
//   .done(ui.changePasswordSuccess)
//   .fail(ui.fail);
// };

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);

  //$('.sign-in-form').on('submit', onSignIn);
  //$('#sign-out').on('submit', onSignOut);
  //$('#change-password-form').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};
