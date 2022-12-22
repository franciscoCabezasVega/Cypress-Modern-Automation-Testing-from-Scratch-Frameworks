/// <reference types="Cypress" />

describe('My Four Test Suite', () => {
    it('My FourTest case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        
        // Window:alert
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        // Window:confirm
        cy.get('input[value=Confirm]').click()
        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // invoke() remove attribute
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        // validate url
        cy.url().should('include', 'rahulshettyacademy')

        // go return on the page
        cy.go('back')
        cy.url().should('include', 'AutomationPractice')

    })
})