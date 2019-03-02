/* eslint-disable require-jsdoc */
(function(window) {
  'use strict';
  const App = window.App || {};

  function CookieJar() {
  }

  CookieJar.prototype.setCookie = function(cname, cvalue, exdays) {
    console.log('setting cookie "' + cname + '" value="' +
        cvalue + '" exdays="' + exdays + '"');
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  };

  CookieJar.prototype.getCookie = function(cname) {
    console.log('getting cookie "' + cname + '"');
    const name = c.name + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  CookieJar.prototype.getCookie = function(cname) {
    console.log('getting cookie "' + cname + '"');
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };
  App.CookieJar = CookieJar;
  window.App = App;
})(window);
