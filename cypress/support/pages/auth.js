class Auth{
  //difference than Javai class name does not haave to be same with file name
  //you can put more thn one class in a file, and none of then have any superiority over each other
  login(user_name, password){
    cy.get('[name="username"]').type(user_name);
    cy.get('[name="password"]').type(password);
    cy.get('#wooden_spoon]').click();
  }

  logout(){
    cy.contains('Logout').should('be.visible').click();
  }
}

const auth = new Auth();  //object of the class we made

module.exports={
  auth
}
