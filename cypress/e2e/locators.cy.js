/// <reference types="cypress" />

describe('Find or Get Elements by using different locators', ()=>{

    beforeEach(() =>{
        // runs once before each test cases, beforeMethod in TestNg
        cy.clearCookies();
        cy.visit('/login')
    })

    it('Check different locators strategies',() =>{
        //By CSS locator
        cy.get("input[name='username']").type("CydeoStudent");
        //every statement creates an object to be interacted,
        //and next command makes operatin to object created at the previous statemnt
        cy.get("[type='text']").clear(); //clear what is typed
        
        cy.get("input").each((item, index, list) =>{
            //assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })
    })
   
})
