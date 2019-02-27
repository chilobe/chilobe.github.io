(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function CookieJar() {
    console.log('cookie jar created!');
  }

  CookieJar.prototype.setCookie = function(cname, cvalue, exdays) {
    console.log('setting cookie "' + cname + '" value="' + cvalue + '" exdays="' + exdays + '"');
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  CookieJar.prototype.getCookie = function(cname) {
    console.log('getting cookie "' + cname + '"');
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  CookieJar.prototype.getCookie = function(cname) {
    console.log('getting cookie "' + cname + '"');
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  App.CookieJar = CookieJar;
  window.App = App;
})(window);
