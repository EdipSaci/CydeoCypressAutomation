import { auth } from '../../support/pages/auth';
import { navigateTo } from '../../support/pages/navigation';

const LoginLocators = require('../../support/pages/auth'); // this way reaches al objects of auth class

describe('Auth: Login user with different ways', () => {
  // navigation to the test page
  beforeEach('Navigateto login page', () => {
    cy.clearAllCookies();
    navigateTo.loginPage(); // this function we called it from our POM
  });

  it.skip('Happy path scenario using POM Function', () => {
    // auth.login('hardcoded variables')  -> not a good way
    cy.fixture('user').then((user) => {
      auth.login(user.user2.username, user.user2.password);
    });

    // let's call our custom command to verfiy the text
    cy.textExists('You logged into a secure area!');
    auth.logout();
  });

  it.skip('Happy path scenario using POM Locators', () => {
    // auth.login('hardcoded variables')  -> not a good way
    cy.fixture('user').then((user) => {
      // I need to import locators object
      LoginLocators.locators.userName.type(user.user2.username);
      LoginLocators.locators.password.type(user.user2.password);
      LoginLocators.locators.submit.click();
    });

    // let's call our custom command to verfiy the text
    cy.textExists('You logged into a secure area!');
    auth.logout();
  });

  it('Check invalid user credentials', () => {
    auth.login('invalid234', 'invalid454'); // beauty of re-usability
    //verify error message
    cy.textExists('Your username is invalid!');
  })
});
