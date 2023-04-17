/// <reference types="cypress" />
import HomePage_PO from "../../support/PageObject/webdrivwer-uni/HomePage_PO";
describe("Validate webdriveruni hompage links WebdriverUni", () => {
    const homPagePO = new HomePage_PO
    it("Confirm links redirect to the correct pages", () => {
        // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        homPagePO.visitHomePage()
        cy.get("#contact-us").invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload(true) //reload without cashe
        cy.url().should('include', 'http://www.webdriveruniversity.com')

        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get("#login-portal").invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include', 'Login-Portal')

        cy.go('back')
        cy.get('#to-do-list').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'To-Do-List')
        cy.go('back')

    });
})