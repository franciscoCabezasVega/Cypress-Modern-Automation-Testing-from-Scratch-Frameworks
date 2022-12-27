/// <reference types="Cypress" />

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
    })
})