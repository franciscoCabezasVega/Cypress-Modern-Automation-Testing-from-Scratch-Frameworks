/// <reference types="Cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';
import HomePage from "../../pageObjects/HomePage";

const country = faker.address.country()
const homepage = new HomePage()

var sum = 0

Given('I open Ecommerce page', () => {
    cy.visit('/angularpractice')
})

When('I add items to cart', function () {
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

// When I fill the form details
When('I fill the form details', (dataTable) => {
    // [name, gender], [Bob, male]
    homepage.getEditBox().type(dataTable.rawTable[1][0]).should('have.value', dataTable.rawTable[1][0])
    homepage.getEmail().type(dataTable.rawTable[1][2]).should('have.value', dataTable.rawTable[1][2])
    homepage.getPassword().type(dataTable.rawTable[1][3])
    homepage.getRadioButton()
        .check()
        .should('be.checked')
    homepage.getGender()
        .select(dataTable.rawTable[1][1])
        .should('have.value', dataTable.rawTable[1][1])
    homepage.getRandomEntrepreneaur().check().should('be.checked')
    homepage.getDate().type(dataTable.rawTable[1][4]).should('have.value', dataTable.rawTable[1][4])
})

// Then validate the forms behavior
Then('Validate the forms behaviour', function(dataTable) {
    homepage.getTwoWayDataBinding().should('have.value', dataTable.rawTable[1][0])
    homepage.getEditBox().should('have.attr', 'minlength', '2')
    homepage.getEntrepreneaur().should('be.disabled')
})

// Then validate the forms behavior
Then('Select the Shop Page', () => {
    homepage.getShopTab().click()   
})