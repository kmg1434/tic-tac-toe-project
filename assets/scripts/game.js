'use strict';

const onClick = function () {

};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onClick);
};

module.exports = {
  addHandlers,
};
