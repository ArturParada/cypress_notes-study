/// <reference types="cypress" />
import HomePage_PO from "../../support/PageObject/webdrivwer-uni/HomePage_PO"
import ContactUs_PO from "../../support/PageObject/webdrivwer-uni/ContactUS_PO"

describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const homePage_PO = new HomePage_PO
    const contactUs_PO = new ContactUs_PO

    before(function () {
        cy.fixture('example').then((data) => {
            globalThis.data = data
        })
    })
    beforeEach(() => {
        homePage_PO.visitHomePage()
        contactUs_PO.clickOnContactUsButton()
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        contactUs_PO.contactFormSubmission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!')

    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        contactUs_PO.contactFormSubmission(data.first_name, data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address')

    });
})