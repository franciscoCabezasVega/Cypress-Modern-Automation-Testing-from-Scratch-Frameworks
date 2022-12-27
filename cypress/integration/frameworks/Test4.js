/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';

const country = faker.address.country()

describe('My Four framework Test Suite', () => {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('My FourTestFramework case', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice')

        // Custom command cypress
        cy.contains('Shop').click()
           
        for (var i = 0; i < this.data.productName.length; i++){
            cy.addProduct(this.data.productName[i])
        }
        
        cy.contains('Checkout').click()

        cy.contains('Checkout').click()
        cy.get('#country').type(country).should('have.value', country)
        cy.contains('Purchase').click()
        cy.get('.alert').should('be.visible')
        cy.get('.alert').should('contain', 'Success! Thank you! Your order will be delivered in next few weeks :-).')  
    })
})