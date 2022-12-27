/// <reference types="Cypress" />

import { randomGenerator } from '../../support/misic';

let randomRadioButton = randomGenerator(1, 2)

describe('My Thrid framework Test Suite', () => {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('My ThridTestFramework case', function () {
        cy.visit('/angularpractice/')

        // Form in angular
        cy.get('input[name=name]').eq(0).type(this.data.name).should('have.value', this.data.name)
        cy.get('input[name=name]').should('have.attr', 'minlength', '2')
        cy.get('input[name=email]').type(this.data.email).should('have.value', this.data.email)
        cy.get('input[type=password]').type(this.data.password)
        cy.get('#exampleCheck1')
            .check()
            .should('be.checked')
        cy.get('#exampleFormControlSelect1')
            .select(this.data.gender)
            .should('have.value', this.data.gender)
        cy.get(`input[value=option${randomRadioButton}]`).check().should('be.checked')
        cy.get('input[value=option3]').should('be.disabled')
        cy.get('input[type=date]').type(this.data.birthDate).should('have.value', this.data.birthDate)
        cy.get('input[name=name]').eq(1).should('have.value', this.data.name)
        cy.get('input[type=submit]').click()
        cy.get('.alert').should('be.visible')
        cy.get('.alert').should('contain', 'Success! The Form has been submitted successfully!.')
    })
})