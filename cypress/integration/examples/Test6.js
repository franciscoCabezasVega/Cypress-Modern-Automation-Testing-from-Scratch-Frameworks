/// <reference types="Cypress" />

describe('My Six Test Suite', () => {
    it('My SixTest case', () => {
        cy.visit('/AutomationPractice')

        // Mouse Hover Event
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })
})