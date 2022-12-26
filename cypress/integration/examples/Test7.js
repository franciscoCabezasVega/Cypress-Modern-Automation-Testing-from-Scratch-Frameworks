/// <reference types="Cypress" />

describe('My Seven Test Suite', () => {
    it('My SevenTest case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')

        // prop url visit
        cy.get('#opentab').then(($el) => {
            const url = $el.prop('href')
            cy.log(url)
            cy.visit(url)
        })
    })
})