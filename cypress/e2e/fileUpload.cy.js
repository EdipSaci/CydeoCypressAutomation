/// <reference types="cypress" />

describe('Cypress File Upload  Tests', () => {

  /**
   * Step 1:
   * In order to upload files in Cypress we need to install plugin
   * We will fun folloing command
   * npm install -dev cypress-file-upload
   * 
   * Step 2:
   * We need to import nnecessary command to our project
   * in our support folder we have command.js file : this is good placefor puuting our utility methods(functions)
   * Add following line
   * import 'cypress-file-upload';
   * 
   * Step 3:
   * The file that you want to upload should be in your fixture folder

   */
 
  beforeEach('Navigate to upload page',() => {
    // runs once before each test cases, beforeMethod in TestNg
    cy.clearCookies();
    cy.visit('/upload')
  });

  it('Check upload actions', () => {
    //locator for choose file button
    cy.get('input#file-upload').attachFile('shot.jpg');
    //click on upload button
    cy.get('#file-submit').click();
    //assert that path message File Uploaded!
    cy.get('#uploaded-files').then(()=>{
      cy.contains('shot.jpg').should('be.visible');
    })
  });
  
});
