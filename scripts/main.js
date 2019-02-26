(function(window) {
  'use strict';
  var THEME_TOGGLE_BUTTON_SELECTOR = '[data-button-role="theme-toggle"]';
  var THEME_TOGGLE_SWITCH_SELECTOR = '[data-toggle-role="theme-toggle-switch"]';
  var App = window.App;
  var Button = App.Button;

  var themeToggleButton = new Button(THEME_TOGGLE_BUTTON_SELECTOR);

  themeToggleButton.addClickHandler(function(buttonElement) {
    var themeToggleSwitch = $(buttonElement).find("i[data-toggle-role='theme-toggle-switch']");
    console.log(themeToggleSwitch.text());

    if ((themeToggleSwitch.text()) === ('toggle_on')) {
      themeToggleSwitch.text('toggle_off');
    } else {
      themeToggleSwitch.text('toggle_on');
    }
  });

})(window);
