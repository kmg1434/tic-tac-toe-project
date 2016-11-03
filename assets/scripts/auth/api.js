'use strict';

const vault = require('../vault');

// const getFormFields = require('../../../lib/get-form-fields.js');

// authApi.signUp(authUi.success, authUi.failure, data);

// JQuery works but linter is throwing errors for "$ is not defined"

const signUp = function (data) {
  console.log(data);
  return $.ajax({
    url: vault.host + '/sign-up/',
    method: 'POST',
    data,
  });
};

const signIn = function (data) {
  console.log(data);
  return $.ajax({
    url: vault.host + '/sign-in/',
    method: 'POST',
    data,
  });
};

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: vault.host + '/sign-out/' + vault.user.id,
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
  });
};

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: vault.host + '/change-password/' + vault.user.id,
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
    data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
