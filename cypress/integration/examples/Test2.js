/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';

const randomProduct = faker.datatype.number({ min: 0, max: 3 })

describe('My Second Test Suite', () => {
    it('My SecondTest case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('form input[type=search]')
            .type('ca')
            .should('have.value', 'ca')

        cy.get('.products').as('productLocator')
        cy.get('@productLocator')
            .find('.product')
            .each(($el, index, $list) => {
                const productName = $el.find('h4.product-name').text()
                if (productName.includes('Cashews')) {
                    cy.wrap($el).find('button').click()
                }
            })

        cy.get('img[alt=Cart]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})