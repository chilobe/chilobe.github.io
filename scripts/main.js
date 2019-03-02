(function(window) {
  'use strict';
  const $ = window.jQuery;

  const THEME_TOGGLE_BUTTON_SELECTOR = '[data-button-role="theme-toggle"]';
  const COOKIE_POLICY_AGREE_BUTTON_SELECTOR =
    '[data-button-role="cookie-policy-agree"]';

  const COOKIE_POLICY_ACCEPTED = 'accept_cookies';
  const COOKIE_WEBSITE_THEME = 'theme';

  const App = window.App;
  const CookieJar = App.CookieJar;
  const Button = App.Button;
  const ThemeButtonHandler = App.ThemeButtonHandler;
  const ThemeManager = App.ThemeManager;

  const themeToggleButton = new Button(THEME_TOGGLE_BUTTON_SELECTOR);

  const cookieJar = new CookieJar();

  const themeManager = new ThemeManager();

  const themeButtonHandler =
    new ThemeButtonHandler(themeToggleButton, cookieJar, themeManager);

  /* enable smooth scrolling when clicking anchor links*/
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      // eslint-disable-next-line no-invalid-this
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'});
    });
  });
  /* Check if cookies are enabled*/

  const $cookieAcceptancePopUp = $('<div class="card box-shadow cookie-policy' +
    ' fixed-bottom container"><div class="card-body"><span>Cookies help us' +
    ' deliver our services. By using our services or clicking I agree, you' +
    ' agree to our use of cookies.&nbsp </span><a href="privacypolicy.html">' +
    'Learn More.</a>&nbsp&nbsp <button type="button" class="btn btn-raised ' +
    'btn-primary" data-button-role="cookie-policy-agree">' +
    'I AGREE</button></div></div>');
  if (cookieJar.getCookie(COOKIE_POLICY_ACCEPTED) === 'yes') {
    // console.log('cookies accepted!');
    if (cookieJar.getCookie(COOKIE_WEBSITE_THEME) === 'dark') {
      // console.log('trying to enable dark theme...');
      themeButtonHandler.setSwitchState('on');
      themeManager.enableDarkTheme();
    }
  } else {
    $('main').append($cookieAcceptancePopUp);
    const cookiePolicyAgreeButton =
      new Button(COOKIE_POLICY_AGREE_BUTTON_SELECTOR);
    cookiePolicyAgreeButton.addClickHandler(function(buttonElement) {
      cookieJar.setCookie(COOKIE_POLICY_ACCEPTED, 'yes', 1);
      $('.cookie-policy').remove();
    });
  }
})(window);
