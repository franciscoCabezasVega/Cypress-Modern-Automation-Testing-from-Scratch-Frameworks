/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';
import HomePage from "./HomePage"
import ProductPage from './ProductPage';
import {
    randomGender,
    randomDateBetween,
    startDate,
    endDate
} from '../../support/misic';

const fullName = faker.name.fullName()
const email = faker.internet.email()
const birthDate = randomDateBetween(startDate, endDate)

let selectRandomGender = randomGender(0, 1)

describe('My pom framework Test Suite', () => {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('My PomTestFramework case', function () {
        const homepage = new HomePage()
        const productpage = new ProductPage()

        cy.visit('/angularpractice/')

        homepage.getEditBox().type(fullName).should('have.value', fullName)
        homepage.getEditBox().should('have.attr', 'minlength', '2')
        homepage.getEmail().type(email).should('have.value', email)
        homepage.getPassword().type(faker.internet.password())
        homepage.getRadioButton()
            .check()
            .should('be.checked')
        homepage.getGender()
            .select(selectRandomGender)
            .should('have.value', selectRandomGender)
        homepage.getRandomEntrepreneaur().check().should('be.checked')
        homepage.getEntrepreneaur().should('be.disabled')
        homepage.getDate().type(birthDate).should('have.value', birthDate)
        homepage.getEditBox().should('have.value', fullName)
        homepage.getSubmitButton().click()
        homepage.getAlertMessage().should('be.visible')
        homepage.getAlertMessage().should('contain', 'Success! The Form has been submitted successfully!.')  

        homepage.getShopTab().click()

        for (var i = 0; i < this.data.productName.length; i++){
            cy.addProduct(this.data.productName[i])
        }

        productpage.getCheckoutButton().click()
    })
})