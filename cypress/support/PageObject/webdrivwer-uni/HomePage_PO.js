class HomePage_PO {
    get dropDownPage() {
        return cy.get("#dropdown-checkboxes-radiobuttons")
    }
    get contactUS() {
        return cy.get("#contact-us")
    }
    get loginPortal() {
        return cy.get("#login-portal")
    }
    get toDoList() {
        return cy.get('#to-do-list')
    }

    visitHomePage() {
        // cy.visit(Cypress.env("webdriver_uni_home"), { timeout: 6000 })
        cy.visit("/", { timeout: 6000 })
    }
    visitDropDownChceckboxesRadiobuttonsPage() {
        this.dropDownPage.invoke('removeAttr', 'target').click({ force: true })
    }
    visitContacUSPage() {
        this.contactUS.invoke('removeAttr', 'target').click({ force: true })
    }
    urlValidation(url) {
        cy.url().should('include', `${url}`)
    }
    goBackAndReloadWithOutCashe() {
        cy.go('back')
        cy.reload(true) //reload without cashe
    }
    visitLoginPortalPage() {
        this.loginPortal.invoke('removeAttr', 'target').click({ force: true })
    }
    visitToDoListPage() {
        this.toDoList.invoke('removeAttr', 'target').click()
    }

}
export default new HomePage_PO()