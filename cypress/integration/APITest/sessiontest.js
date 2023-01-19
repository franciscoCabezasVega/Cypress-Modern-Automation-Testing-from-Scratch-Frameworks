/// <reference types="Cypress" />

import neatCSV from 'neat-csv';
let productName;

describe('JWT Session', () => {

    it('is logged in through local storage', function () {
        cy.LoginAPI().then(() => {
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: (window) => {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })

        cy.get(".card-body b").eq(1)
            .then((element) => {
                productName = element.text();
            })
        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.wait(2000)
        cy.get("[routerlink*='cart']").click()
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Country']").type("ind")
        cy.get(".ta-results button")
            .each(($el, index, $list) => {
                if ($el.text() === " India") {
                    cy.wrap($el).click()
                }
            })
        cy.get(".action__submit").click()
        cy.wait(2000)
        cy.get('.order-summary button').click()
        cy.readFile("cypress/downloads/order-invoice_rahulshetty.csv")
            .then(async (text) => {
                const csv = await neatCSV(text)
                console.log(csv)
                const actualProductcsv = csv[0]["Product Name"]
                expect(productName).to.equal(actualProductcsv)
            })
    })
})