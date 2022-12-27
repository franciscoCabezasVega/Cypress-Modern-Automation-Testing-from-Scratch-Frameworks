/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe';

describe('My Seven Test Suite', () => {
    it('My SevenTest case', () => {
        cy.visit('/AutomationPractice')

        // iframe in cypress
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click() // eq(0) permite definir a que elemento le vamos a dar click
        cy.wait(2000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    })
})