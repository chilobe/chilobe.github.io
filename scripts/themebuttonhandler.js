(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function ThemeButtonHandler(themeTogglebutton, cookieJar,themeManager) {
    if (!themeTogglebutton) {
      throw new Error('no button provided');
    }


    //this.themeTogglebutton = themeTogglebutton;
    //this.cookieJar = cookieJar;



    themeToggleButton.addClickHandler(function(buttonElement) {
  var themeToggleSwitch = $(buttonElement).find("i[data-toggle-role='theme-toggle-switch']");
  var navElement = document.getElementsByTagName('nav')[0];

  if ((themeToggleSwitch.text()) === ('toggle_off')) {
    //dark mode on...
    themeToggleSwitch.text('toggle_on');
    themeManager.enableDarkTheme();
    cookieJar.setCookie(COOKIE_WEBSITE_THEME,'dark','1');

    /*document.documentElement.classList.add(DARK_THEME_CLASS);
    navElement.classList.remove(NAV_BAR_LIGHT_BACKGROUND);
    navElement.classList.add(NAV_BAR_DARK_BACKGROUND);*/
  } else {
    //dark mode off...
    themeToggleSwitch.text('toggle_off');
    themeManager.enableLightTheme();
    cookieJar.setCookie(COOKIE_WEBSITE_THEME,'light','1');
    /*document.documentElement.classList.remove(DARK_THEME_CLASS);
    navElement.classList.remove(NAV_BAR_DARK_BACKGROUND);
    navElement.classList.add(NAV_BAR_LIGHT_BACKGROUND);*/
  }
});
  }

  ThemeButtonHandler.prototype.setSwitchState = function(state)
  {

  };

  App.ThemeButtonHandler = ThemeButtonHandler;
  window.App = App;
})(window);
