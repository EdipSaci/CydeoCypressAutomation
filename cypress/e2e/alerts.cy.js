/// <reference types="cypress" />

describe('Alerts in Cypress Test Environment', { baseUrl: 'https://demoqa.com' }, () => {
  beforeEach(() => {
    // runs once before each test cases, beforeMethod in TestNg
    cy.clearCookies();
    cy.visit('/alerts');
  });

  xit('Check alert confirmation', () => {
    /**
     * Browser Commands, window:alert, window:confirm, window:on etc...
     *
     */
    const stub = cy.stub(); // created a stub function

    cy.on('window:confirm', stub); // when this confirmation commant initiated store and give the control to stub function

    cy.get('#confirmButton')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?');
      });

    cy.on('window:confirm', () => true); // confirm the alert
    cy.contains('You selected Ok').should('be.visible');
  });

  it('Check alert cancelation', () => {
    /**
     * Browser Commands, window:alert, window:confirm, window:on etc...
     *
     */
    const stub = cy.stub(); // created a stub function

    cy.on('window:confirm', stub); // when this confirmation commant initiated store and give the control to stub function

    cy.get('#confirmButton')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?');
      });

    cy.on('window:confirm', () => false); // cancel the alert confirmation
    cy.contains('You selected Cancel').should('be.visible');
  });
});
