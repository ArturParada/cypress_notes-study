class HomePage_PO {

    visitHomePage() {
        // cy.visit(Cypress.env("webdriver_uni_home"), { timeout: 6000 })
        cy.visit("/", { timeout: 6000 })
    }

}
export default HomePage_PO