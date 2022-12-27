// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite('type', (originalFn, subject, text, options = {}) => {
    options.delay = 100
    return originalFn(subject, text, options)
})

Cypress.Commands.add('addProduct', (product) => {
    cy.get('app-card-list')
        .find('app-card')
        .each(($el, index, $list) => {
            const productName = $el.find('h4.card-title').text()
            if (productName.includes(product)) {
                cy.wrap($el).find('button').click()
            }
        })
})