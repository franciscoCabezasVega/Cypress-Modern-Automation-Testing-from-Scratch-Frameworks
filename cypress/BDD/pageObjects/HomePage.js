import { randomGenerator } from '../../support/misic';

let randomRadioButton = randomGenerator(1, 2)

class HomePage {
    getEditBox() {
        return cy.get('input[name=name]').eq(0)
    }

    getEmail() {
        return cy.get('input[name=email]')
    }

    getPassword() {
        return cy.get('input[type=password]')
    }

    getRadioButton() {
        return cy.get('#exampleCheck1')
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1')
    }

    getEntrepreneaur() {
        return cy.get('input[value=option3]')
    }

    getRandomEntrepreneaur() {
        return cy.get(`input[value=option${randomRadioButton}]`)
    }

    getDate() {
        return cy.get('input[type=date]')
    }

    getSubmitButton() {
        return cy.get('input[type=submit]')
    }

    getTwoWayDataBinding() {
        return cy.get('input[name=name]').eq(1)
    }

    getAlertMessage() {
        return cy.get('.alert')
    }

    getShopTab() {
        return cy.contains('Shop')
    }
}

export default HomePage;