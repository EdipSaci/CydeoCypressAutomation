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
    it.skip('Opening a web app',() =>{
        cy.visit('/registration_form');
    })
    it('Test 2', ()=>{
        expect(false).to.equals(false);
    })
    it('Test 3', ()=>{
        expect(false).not.to.equal(true);
    })
    it('Test 4', () =>{
        expect(5).to.equal(5);
    })
    it('Test 5', () =>{
        expect(true).to.equal('5'==5);
    })
})
