/// <reference types="cypress" />
import HomePage_PO from "../../support/PageObject/webdrivwer-uni/HomePage_PO";
describe("Validate webdriveruni hompage links WebdriverUni", () => {

    it("Confirm links redirect to the correct pages", () => {
        HomePage_PO.visitHomePage()
        HomePage_PO.visitContacUSPage()
        HomePage_PO.urlValidation("Contact-Us")

        HomePage_PO.goBackAndReloadWithOutCashe()
        HomePage_PO.urlValidation('http://www.webdriveruniversity.com')
        cy.go('forward')
        HomePage_PO.urlValidation("Contact-Us")

        cy.go('back')
        HomePage_PO.visitLoginPortalPage()
        HomePage_PO.urlValidation("Login-Portal")

        cy.go('back')
        HomePage_PO.visitToDoListPage()
        HomePage_PO.urlValidation('To-Do-List')
        cy.go('back')

    });
})