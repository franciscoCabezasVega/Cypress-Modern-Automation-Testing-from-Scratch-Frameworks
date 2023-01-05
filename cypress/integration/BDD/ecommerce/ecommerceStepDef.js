/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';

const country = faker.address.country()

var sum = 0

Given('I open Ecommerce page', () => {
    cy.visit('/angularpractice')
})

When('I add items to cart', function() {
    // Custom command cypress
    cy.contains('Shop').click()

    for (var i = 0; i < this.data.productName.length; i++) {
        cy.addProduct(this.data.productName[i])
    }

    cy.contains('Checkout').click()
})

When('Validate the total prices', () => {
    // Obtain price of products
    cy.get('tr td:nth-child(4) strong')
        .each(($el, index, $list) => {
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            cy.log(res)
            sum = Number(sum) + Number(res)
        }).then(() => {
            cy.log(sum)
        })

    // Validating sum of price of products with result in cart
    cy.get('h3 strong').then((element) => {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
    })

    cy.contains('Checkout').click()
})

Then('Select the country submit', () => {
    cy.get('#country').type(country).should('have.value', country)
    cy.contains('Purchase').click()
})

Then('Verify message', () => {
    cy.get('.alert').should('be.visible')
    cy.get('.alert').should('contain', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
})