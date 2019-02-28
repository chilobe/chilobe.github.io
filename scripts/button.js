/* eslint-disable require-jsdoc */
(function(window) {
  'use strict';
  const App = window.App || {};
  const $ = window.jQuery;

  function Button(selector) {
    if (!selector) {
      throw new Error('no selector provided');
    }

    this.$buttonElement = $(selector);

    if (this.$buttonElement.length === 0) {
      throw new Error('Could not find the element with selector: ' + selector);
    }
  }

  Button.prototype.addClickHandler = function(fn) {
    this.$buttonElement.on('click', function(event) {
      event.preventDefault();
      fn();
    });
  };

  Button.prototype.getButtonElement = function() {
    return this.$buttonElement;
  };

  App.Button = Button;
  window.App = App;
})(window);
