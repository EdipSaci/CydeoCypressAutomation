/// <reference types="cypress" />

describe('Context: My first tests', ()=>{
    before(()=>{
        // runs once before all test casess in this describe block, like beforeClass in TestNG
    })

    beforeEach(() =>{
        // runs once before each test cases, beforeMethod in TestNg
        cy.clearCookies();
    })

    after(()=> {
        // similar to afterClass in TestNG, runs once after all tests finished
    })

    afterEach(()=>{
        // similar to afterMethod in TestNG 
    })
    it('Opening a we app',() =>{
        cy.visit('/registration_form');

    })
})
