/// <reference types="Cypress" />

describe('My Five Test Suite', () => {
    it('My FiveTest case', () => {
        cy.visit('/AutomationPractice')

        // Web tables element
        cy.get('tr td:nth-child(2)')
            .each(($el, index, $list) => {
                const text = $el.text()
                if (text.includes('Python')) {
                    cy.get('tr td:nth-child(2)')
                        .eq(index)
                        .next()
                        .then((price) => {
                            const priceText = price.text()
                            expect(priceText).to.equal('25')
                        })
                }
            })
    })
})