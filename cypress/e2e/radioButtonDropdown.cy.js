/// <reference types="cypress" />

describe('Context: My first tests', () => {
    before(() => {
      // runs once before all test casess in this describe block, like beforeClass in TestNG
    });
  
    beforeEach(() => {
      // runs once before each test cases, beforeMethod in TestNg
      cy.clearCookies();
    });
  
 
  
    it('eddy practice', () => {
      cy.visit('/registration_form');
      cy.get('input[name="firstname"]').type('edip');
      cy.get('input[name="lastname"]').type('rou');
      
      const email = `abc${Math.floor(10000+ Math.random()*90000)}@cydeo.com`;
      cy.get('input[name="email"]').type(email);

      const password = `abcd${Math.floor(1000+ Math.random()*9000)}`;
      cy.get('input[name="password"]').type(password);

      //radio button
      cy.get('[value="male"]').click();
      cy.get('[value="female"]').click();
      
      //dropdown --> select by text
      cy.get('select[name="department"]').select('MPDC');

      //checkbox
      cy.get('input[id="inlineCheckbox1"]').check()
      .should('have.prop', 'checked', true);

      cy.get('#inlineCheckbox2').check();

      cy.get('#wooden_spoon').should('be.visible');
      //cy.get('#wooden_spoon').click();

      //locate a element by using text
      cy.contains('h2', 'Registration form').should('be.visible');


   
    

    });
   
  });
  
