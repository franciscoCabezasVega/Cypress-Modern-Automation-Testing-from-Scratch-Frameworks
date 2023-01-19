/// <reference types="Cypress" />

describe('My First Fake Test Suite', () => {

    it('My First FakeTest case', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept(
            {
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                statusCode: 200,
                body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }]
            }
        ).as('bookretraievals')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@bookretraievals').then(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

        // Length of the response array = rows of the table
    })
})