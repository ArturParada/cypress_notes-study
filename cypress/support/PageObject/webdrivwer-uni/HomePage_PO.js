class HomePage_PO {
    visitDropDownChceckboxesRadiobuttonsPage() {
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true })
    }


    visitHomePage() {
        // cy.visit(Cypress.env("webdriver_uni_home"), { timeout: 6000 })
        cy.visit("/", { timeout: 6000 })
    }

}
export default HomePage_PO