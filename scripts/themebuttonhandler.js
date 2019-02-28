/* eslint-disable require-jsdoc */
(function(window) {
  'use strict';
  const App = window.App || {};
  const $ = window.jQuery;
  const COOKIE_WEBSITE_THEME = 'theme';
  const COOKIE_POLICY_ACCEPTED = 'accept_cookies';

  function ThemeButtonHandler(themeTogglebutton, cookieJar, themeManager) {
    if (!themeTogglebutton) {
      throw new Error('no button provided');
    }

    this.themeTogglebutton = themeTogglebutton;

    this.themeToggleSwitch = $(this.themeTogglebutton.getButtonElement())
        .find('i[data-toggle-role="theme-toggle-switch"]');

    themeTogglebutton.addClickHandler(function() {
      if ((this.themeToggleSwitch.text()) === ('toggle_off')) {
        // dark mode on...
        this.themeToggleSwitch.text('toggle_on');
        themeManager.enableDarkTheme();
        if (cookieJar.getCookie(COOKIE_POLICY_ACCEPTED)==='yes') {
          cookieJar.setCookie(COOKIE_WEBSITE_THEME, 'dark', '1');
        }
      } else {
        // dark mode off...
        this.themeToggleSwitch.text('toggle_off');
        themeManager.enableLightTheme();
        if (cookieJar.getCookie(COOKIE_POLICY_ACCEPTED)==='yes') {
          cookieJar.setCookie(COOKIE_WEBSITE_THEME, 'light', '1');
        }
      }
    }.bind(this));
  }

  ThemeButtonHandler.prototype.setSwitchState = function(state) {
    if (state ==='on') {
      this.themeToggleSwitch.text('toggle_on');
    } else {
      this.themeToggleSwitch.text('toggle_off');
    }
  };

  App.ThemeButtonHandler = ThemeButtonHandler;
  window.App = App;
})(window);
