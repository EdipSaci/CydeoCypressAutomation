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
        
        //tagName
        cy.get("input").each((item, index, list) =>{
            //assert the length of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })

        //by attribute name
        cy.get('[type]');
        
        //by className
        cy.get('.btn.btn-primary');
        
        //By id 
        cy.get('#wooden_spoon');

        //if I want to use text: no xpath in cypress, but it still possible with a different approach
        cy.get('button').should('contain','Login').click();

    })

    it('Check finding elements by traveling through DOM', () =>{
        //travel to find the login button: locate user name box - go to parent form 
        // then find button
        cy.get('input[name="username"]').parents('form').find('button').should('contain','Login').click();

    })

    it.only('Check different type of assertion', () =>{
        //Cypress itself bundles assertions provided by Chai, Sinon and jQuery libraries

        //Should assertion  : does the assertion directly on the object itsef
        cy.get('#wooden_spoon')
        .should('contain', 'Login')
        .and('have.class','btn btn-primary');

        //expect assertion : create a subject of our test, then you implement different actions
        cy.get('#wooden_spoon').then((buttonElement)=> {
            expect(buttonElement).to.have.text('Login');
            expect(buttonElement).to.have.class('btn btn-primary');
        })

    })
   
})
