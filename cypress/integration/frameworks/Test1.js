/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';
import {
    randomGender,
    randomGenerator,
    randomDateBetween,
    startDate,
    endDate
} from '../../support/misic';

const fullName = faker.name.fullName()
const email = faker.internet.email()
const birthDate = randomDateBetween(startDate, endDate)

let selectRandomGender = randomGender(0, 1)
let randomRadioButton = randomGenerator(1, 2)

describe('My First framework Test Suite', () => {
    it('My FirstTestFramework case', () => {
        cy.visit('/angularpractice/')

        // Form in angular
        cy.get('input[name=name]').eq(0).type(fullName).should('have.value', fullName)
        cy.get('input[name=name]').should('have.attr', 'minlength', '2')
        cy.get('input[name=email]').type(email).should('have.value', email)
        cy.get('input[type=password]').type(faker.internet.password())
        cy.get('#exampleCheck1')
            .check()
            .should('be.checked')
        cy.get('#exampleFormControlSelect1')
            .select(selectRandomGender)
            .should('have.value', selectRandomGender)
        cy.get(`input[value=option${randomRadioButton}]`).check().should('be.checked')
        cy.get('input[value=option3]').should('be.disabled')
        cy.get('input[type=date]').type(birthDate).should('have.value', birthDate)
        cy.get('input[name=name]').eq(1).should('have.value', fullName)
        cy.get('input[type=submit]').click()
        cy.get('.alert').should('be.visible')
        cy.get('.alert').should('contain', 'Success! The Form has been submitted successfully!.')
    })
})