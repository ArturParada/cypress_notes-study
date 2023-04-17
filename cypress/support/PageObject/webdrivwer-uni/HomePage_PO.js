class HomePage_PO {
    get contactUsBTN() {
        return cy.get(("#contact-us"))
    }
    visitHomePage() {
        // cy.visit(Cypress.env("webdriver_uni_home"), { timeout: 6000 })
        cy.visit("/", { timeout: 6000 })
    }
    clickOnContactUsButton() {
        this.contactUsBTN.invoke('removeAttr', 'target').click({ force: true })
    }
}
export default HomePage_PO