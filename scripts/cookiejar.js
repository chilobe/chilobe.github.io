(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function CookieJar() {
  console.log('cookie jar created!');
  }

  App.CookieJar = CookieJar;
  window.App = App;
})(window);
