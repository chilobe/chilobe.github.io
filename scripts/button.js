(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

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
    console.log('Setting click handler for button');
    this.$buttonElement.on('click', function(event) {
      event.preventDefault();
      console.log('button clicked!');
      fn(this);
    });
  };

  App.Button = Button;
  window.App = App;
})(window);
