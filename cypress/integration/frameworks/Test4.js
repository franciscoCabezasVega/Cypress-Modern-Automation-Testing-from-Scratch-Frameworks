/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';

const country = faker.address.country()

var sum = 0

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

        for (var i = 0; i < this.data.productName.length; i++) {
            cy.addProduct(this.data.productName[i])
        }

        cy.contains('Checkout').click()

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
        cy.get('#country').type(country).should('have.value', country)
        cy.contains('Purchase').click()
        cy.get('.alert').should('be.visible')
        cy.get('.alert').should('contain', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    })
})