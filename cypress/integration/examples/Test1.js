/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';

const randomProduct = faker.datatype.number({ min: 0, max: 3 })

describe('My First Test Suite', () => {
    it('My FirstTest case', () => {
        cy.visit('/')

        cy.get('form input[type=search]')
            .type('ca')
            .should('have.value', 'ca')

        // only show visible elements - first option
        cy.get('.product:visible').should('have.length', 4)
        // parent child chaining - second option
        cy.get('.products')
            .find('.product')
            .then(listing => {
                const listingCount = Cypress.$(listing).length;
                expect(listing).to.have.length(listingCount);
            });

        // validate name of product with regular expression
        cy.get('.products')
            .find('h4.product-name')
            .invoke('text')
            .should('match', /ca/i)

        // select product random
        cy.get('.products')
            .find('.product')
            .eq(randomProduct)
            .contains('ADD TO CART')
            .click()

        // select name of product with each
        cy.get('.products')
            .find('.product')
            .each(($el, index, $list) => {
                const productName = $el.find('h4.product-name').text()
                if (productName.includes('Cashews')) {
                    cy.wrap($el).find('button').click()
                }
            })
        
        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')

        // this is to print in logs
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
        })
    })
})