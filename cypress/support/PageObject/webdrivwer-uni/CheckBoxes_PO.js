class CheckBoxes_PO {
    get firstcheckboxe() {
        return cy.get('#checkboxes > :nth-child(1) > input')
    }
    get checkboxesArray() {
        return cy.get("input[type='checkbox']")
    }
    chooseChceckboxe(option) {
        this.firstcheckboxe.as(`option-${option}`)
        cy.get(`@option-${option}`).check().should('be.checked')
    }
    uncheckAndValid() {
        cy.get(':nth-child(5) > input').as('option-3')
        cy.get("@option-3").uncheck().should('not.be.checked')
    }
    selectMultiCheckboxe() {
        this.checkboxesArray.check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    }
    selectMultiCheckboxeViaEach() {
        this.checkboxesArray.each($check => {
            cy.wrap($check).click()
        })

    }
}
export default new CheckBoxes_PO()