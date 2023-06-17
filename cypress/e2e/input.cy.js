/// <reference types="cypress" />

describe('Input Forms Tests ', () => {
  beforeEach('Navigate to registration page', () => {
    cy.clearCookies();
    cy.visit('/registration_form');
  });

  it.skip('Check different input box fields and verify', () => {
    // fill the form for username and other info
    cy.get('input[name="firstname"]').type('Mike');
    cy.get('input[name="lastname"]').type('Walt');
    cy.get('input[name="username"]').type('GoodOne');

    /**
     * Math.random() : creates a number between 0-1
     * Math.floor() : makes it a qhole number
     */

    const email = `formtest${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
    cy.get('input[name="email"]').type(email);

    const password = `test${Math.floor(100000 + Math.random() * 900000)}`;
    cy.get('input[name="password"]').type(password);

    const phoneNumber = `555-000-${Math.floor(1000 + Math.random() * 9000)}`; // 4 digit extension
    cy.get('input[name="phone"]').type(phoneNumber);

    cy.get('input[name="birthday"]').type('01/01/1999');
  });

  it.skip('Check different radio button acitons', () =>{
        cy.get('.radio')  // this locate the all radio byttons  
        .find('[type=radio]') 
        .then( (radio => {  // stores them in radio object. it is a JQuery object
            // get all radio buttons, select the first one and verify that it is checked
            cy.wrap(radio).first().check().should('be.checked');  // I wrapped it to cypress object. 
            //           then I used cypress functions. cypress works in a chainable functions structure,

            /**
            * radio:is a JQuery element
            * cy.wrap(radio): turns it into Cypress object so that I can use cypress functions
            * check() : checks it out
            * should(): verifes whatever I provde as a parameter 'be.checked'
            */

            // get all radio buttons, select the first one and verify that it is checked and confirmation label is visible
            cy.wrap(radio).eq(1).check().should('be.checked');
            cy.get('[data-bv-icon-for="gender"]').should('be.visible'); // common function used in tests
            //Third radio button is NOT checked
            cy.wrap(radio).eq(2).should('not.be.checked');


        }))

  })

  it('check different checkbox actions' ,()=>{
      // get all checkboxes, select Jav and verify
      cy.get('[type="checkbox"]').then((checkbox) =>{
        cy.wrap(checkbox).eq(1).check().should('be.checked');
        //unchecked java
        cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');
        //verfiy third one has a value Javascript and then check and verfiy
        cy.wrap(checkbox).eq(2)
        .should('have.value', 'javascript')
        .check().should('be.checked');
      })       
  })
});
