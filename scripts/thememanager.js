/* eslint-disable require-jsdoc */
(function(window) {
  'use strict';
  const App = window.App || {};


  const DARK_THEME_CLASS = 'dark-theme';
  const NAV_BAR_DARK_BACKGROUND = 'bg-dark';
  const NAV_BAR_LIGHT_BACKGROUND = 'bg-light';


  function ThemeManager(selector) {
    this.navElement = document.getElementsByTagName('nav')[0];
  }

  ThemeManager.prototype.enableDarkTheme = function() {
    // console.log('dark-theme enabled.');
    document.documentElement.classList.add(DARK_THEME_CLASS);
    if (typeof this.navElement !== 'undefined') {
      this.navElement.classList.remove(NAV_BAR_LIGHT_BACKGROUND);
      this.navElement.classList.add(NAV_BAR_DARK_BACKGROUND);
    }
  };

  ThemeManager.prototype.enableLightTheme = function() {
    // console.log('light-theme enabled.');
    document.documentElement.classList.remove(DARK_THEME_CLASS);
    if (typeof this.navElement !== 'undefined') {
      this.navElement.classList.remove(NAV_BAR_DARK_BACKGROUND);
      this.navElement.classList.add(NAV_BAR_LIGHT_BACKGROUND);
    }
  };

  App.ThemeManager = ThemeManager;
  window.App = App;
})(window);
