/// <reference types="cypress" />

describe('Cypress WebTable Tests', { baseUrl: 'https://demoqa.com' }, () => {
  /**
   * If you need to navigate to a URL other than your baseUrl, you define it at describe block or in the if block
   */

  beforeEach('Navigate to upload page', () => {
    // runs once before each test cases, beforeMethod in TestNg
    cy.clearCookies();
    cy.visit('/webtables');
  });

  it.skip('Check finding and editing a record', () => {
    /**
     *locate table body-then navigate through this element to find element Alden, then update info with another person
     *1. get me table body
     *2. get me the row that contains Alden
     *3. stored it into jquery element
     */

    cy.get('.rt-tbody')
      .contains('.rt-tr-group', 'Alden')
      .then((row) => {
        // click on edit button for Alden record
        cy.wrap(row).find('[title="Edit"]').click();
        // fill the box
        cy.get('#firstName').clear().type('John');
        cy.get('#lastName').clear().type('Wick');
        cy.get('#submit').click();
        // from cypress test perspective we are still inside row element : nedd to do assertion
        cy.wrap(row).find('.rt-td').eq(0).should('contain', 'John');
        cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Wick');
      });
  });

  xit('Check finding and deleting a record', () => {
    cy.get('.rt-tbody')
      .contains('.rt-tr-group', 'Alden')
      .then((row) => {
        // click on delete button for Alden record
        cy.wrap(row).find('[title="Delete"]').click();
      });

    // assert that table does not have Alden record
    cy.get('.rt-tbody').should('not.contain', 'Alden');
    // search for Alden in the body
    cy.get('#searchBox').type('Alden');
    // assert that there is no record
    cy.get('.rt-tbody').should('not.contain', 'Alden');
    // No data found element is visible or not
    cy.get('.rt-noData').should('contain', 'No rows found').should('be.visible');
  });

  xit('Check for different age record', () => {
    // define age groups
    const ageGroup = [29, 39, 45, 77];
    // for each age group perform same test scenario
    cy.wrap(ageGroup).each((age) => {
      // type age into search box
      cy.get('#searchBox').clear().type(age);
      // verify if that age exists, second number of records

      // negative scenario
      if (age === 77) {
        cy.get('.rt-tbody').find('.rt-tr-group').first().should('not.contain', age);
        cy.get('.rt-noData').should('contain', 'No rows found').should('be.visible');
      } else {
        // positive scenario
        cy.get('.rt-tbody').find('.rt-tr-group').first().should('contain', age);
        cy.get('.rt-tbody').contains('.rt-tr-group', age).should('have.length', 1);
      }
    });
  });

  xit('Check adding a new record - Bad code practice', () => {
    // Click on add button
    cy.get('#addNewRecordButton').click();
    // fill form
    cy.get('#firstName').clear().type('John');
    cy.get('#lastName').clear().type('Wick');
    cy.get('#userEmail').clear().type('johnWick@gmail.com');
    cy.get('#age').clear().type('25');
    cy.get('#salary').clear().type('70000');
    cy.get('#department').clear().type('legal');
    cy.get('#submit').click();

    // assert that new record is added
    cy.get('.rt-tbody')
      .contains('.rt-tr-group', 'John')
      .then((row) => {
        cy.wrap(row).find('.rt-td').eq(0).should('contain', 'John');
        cy.wrap(row).find('.rt-td').eq(1).should('contain', 'Wick');
        cy.wrap(row).find('.rt-td').eq(2).should('contain', '25');
        cy.wrap(row).find('.rt-td').eq(3).should('contain', 'johnWick@gmail.com');
        cy.wrap(row).find('.rt-td').eq(4).should('contain', '70000');
        cy.wrap(row).find('.rt-td').eq(5).should('contain', 'legal');
      });
  });

  it('Check adding a new record - Better approach', () => {
    // Click on add button
    cy.get('#addNewRecordButton').click();
    // fill form
    cy.fixture('user').then((user) => {
      const columnNames = Object.keys(user.user1); // goes to fixture folder, gets user1 object keys and stores into columnNames Array
      const userData = Object.values(user.user1);
      cy.wrap(columnNames).each((columnName, index) => {
        // cy.log(columnName);
        // cy.log(userData[index]);
        // cy.get('#firstName').clear().type('John');  instead of this line
        cy.get(`#${columnName}`).type(`${userData[index]}`);
      });
      cy.get('#submit').click();
      cy.get('.rt-tbody')
        .contains('.rt-tr-group', userData[0])
        .then((row) => {
          cy.wrap(userData).each((value, index) => {
            cy.wrap(row).find('.rt-td').eq(index).should('contain', value);
          });
        });
    });
  });
});
