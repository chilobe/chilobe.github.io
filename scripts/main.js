(function(window) {
  'use strict';
  var THEME_TOGGLE_BUTTON_SELECTOR = '[data-button-role="theme-toggle"]';
  var COOKIE_POLICY_AGREE_BUTTON_SELECTOR = '[data-button-role="cookie-policy-agree"]';
  var THEME_TOGGLE_SWITCH_SELECTOR = '[data-toggle-role="theme-toggle-switch"]';
  var DARK_THEME_CLASS = 'dark-theme';
  var NAV_BAR_DARK_BACKGROUND = 'bg-dark';
  var NAV_BAR_LIGHT_BACKGROUND = 'bg-light';
  var COOKIE_POLICY_ACCEPTED = 'accept_cookies';

  var App = window.App;
  var CookieJar = App.CookieJar;
  var Button = App.Button;


  var themeToggleButton = new Button(THEME_TOGGLE_BUTTON_SELECTOR);

  var cookieJar = new CookieJar();



  /*Check if cookies are enabled*/

  var $cookieAcceptancePopUp = $("<div class='card box-shadow cookie-policy fixed-bottom container'><div class='card-body'><span>Cookies help us deliver our Services. By using our services or clicking I agree, you agree to our use of cookies.&nbsp </span><a href='privacypolicy.html'>Learn More</a>&nbsp&nbsp <button type='button' class='btn btn-raised btn-primary' data-button-role='cookie-policy-agree'>I AGREE</button></div></div>")
  console.log($cookieAcceptancePopUp);
  if(cookieJar.getCookie(COOKIE_POLICY_ACCEPTED)==='yes')
  {
    console.log('cookes accepted!');
  }
  else
  {
    $("main").append($cookieAcceptancePopUp);
    var cookiePolicyAgreeButton = new Button(COOKIE_POLICY_AGREE_BUTTON_SELECTOR);
    cookiePolicyAgreeButton.addClickHandler(function(buttonElement)
    {
      cookieJar.setCookie(COOKIE_POLICY_ACCEPTED,'yes',1);
      $(".cookie-policy").remove();
    });
  }

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



})(window);
