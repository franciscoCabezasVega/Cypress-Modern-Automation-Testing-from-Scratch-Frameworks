/// <reference types="Cypress" />

import { randomGenerator } from '../../support/misic';

let randomCheckbox = randomGenerator(1, 3)
let randomDropdown = randomGenerator(1, 3)
let randomRadioButton = randomGenerator(1, 3)

describe('My Third Test Suite', () => {
    it('My ThirdTest case', () => {

        // Check boxes
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.get(`#checkBoxOption${randomCheckbox}`)
            .check()
            .should('be.checked')
            .and('have.value', `option${randomCheckbox}`)
        cy.get(`#checkBoxOption${randomCheckbox}`)
            .uncheck()
            .should('not.be.checked')
            .and('have.value', `option${randomCheckbox}`)
        for (var i = 0; i < randomCheckbox; i++) {
            cy.get('input[type=checkbox]').check([`option${i + 1}`])
        }

        // Static Dropdown
        cy.get('select').select(`option${randomDropdown}`).should('have.value', `option${randomDropdown}`)

        // Dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div')
            .each(($el, index, $list) => {
                if ($el.text() === "India") {
                    cy.wrap($el).click()
                }
            })

        // Autocomplete
        cy.get('#autocomplete').should('have.value', 'India')

        // Hide and Visible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()

        // Radio Button
        cy.get(`label input[value=radio${randomRadioButton}]`).check().should('be.checked')

    })
})