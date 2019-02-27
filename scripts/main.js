(function(window) {
  'use strict';
  var THEME_TOGGLE_BUTTON_SELECTOR = '[data-button-role="theme-toggle"]';
  var COOKIE_POLICY_AGREE_BUTTON_SELECTOR = '[data-button-role="cookie-policy-agree"]';
  var THEME_TOGGLE_SWITCH_SELECTOR = '[data-toggle-role="theme-toggle-switch"]';
  var DARK_THEME_CLASS = 'dark-theme';
  var NAV_BAR_DARK_BACKGROUND = 'bg-dark';
  var NAV_BAR_LIGHT_BACKGROUND = 'bg-light';
  var App = window.App;
  var CookieJar = App.CookieJar;
  var Button = App.Button;


  var themeToggleButton = new Button(THEME_TOGGLE_BUTTON_SELECTOR);
  var cookiePolicyAgreeButton = new Button(COOKIE_POLICY_AGREE_BUTTON_SELECTOR);
  var cookieJar = new CookieJar();


  /*Check if cookies are enabled*/


  themeToggleButton.addClickHandler(function(buttonElement) {
    var themeToggleSwitch = $(buttonElement).find("i[data-toggle-role='theme-toggle-switch']");
    var navElement = document.getElementsByTagName('nav')[0];

    if ((themeToggleSwitch.text()) === ('toggle_off')) {
      //dark mode on...
      themeToggleSwitch.text('toggle_on');
      document.documentElement.classList.add(DARK_THEME_CLASS);
      navElement.classList.remove(NAV_BAR_LIGHT_BACKGROUND);
      navElement.classList.add(NAV_BAR_DARK_BACKGROUND);
    } else {
      //dark mode off...
      themeToggleSwitch.text('toggle_off');
      document.documentElement.classList.remove(DARK_THEME_CLASS);
      navElement.classList.remove(NAV_BAR_DARK_BACKGROUND);
      navElement.classList.add(NAV_BAR_LIGHT_BACKGROUND);
    }
  });

  cookiePolicyAgreeButton.addClickHandler(function(buttonElement) {
    var cookiePolicyCard = $(".cookie-policy").remove();
  });

})(window);
