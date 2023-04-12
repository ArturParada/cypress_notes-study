class HomePage_PO {
    visitHomePage() {
        cy.visit(Cypress.env("webdriver_uni_home"))
    }
    clickOnContactUsButton() {
        cy.get("#contact-us").invoke('removeAttr', 'target').click({ force: true })
    }
}
export default HomePage_PO