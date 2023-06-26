class Auth {
  // difference than Javai class name does not haave to be same with file name
  // you can put more thn one class in a file, and none of then have any superiority over each other
  login(user_name, password) {
    cy.get('[name="username"]').type(user_name);
    cy.get('[name="password"]').type(password);
    cy.get('#wooden_spoon').click();
  }

  logout() {
    cy.contains('Logout').should('be.visible').click();
  }
}

const auth = new Auth(); // object of the class we made

class Locators {
  // we can create another class here, how do we apply findBy annotation
  get userName() {
    // userName is the webElement variable name
    return cy.get('[name="username"]', { timeout: 10000 }); // defining custom timeout for a specific element, this timeout is dynamic wait, when it finds it moves on
  }

  get password() {
    return cy.get('[name="password"]', { timeout: 10000 });
  }

  get submit() {
    return cy.get('#wooden_spoon', { timeout: 10000 });
  }
}

const locators = new Locators();

module.exports = {
  auth,
  locators,
};
