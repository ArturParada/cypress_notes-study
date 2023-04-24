class AutoComplateText_PO {
    get searchBar() {
        return cy.get('#myInput')
    }

    goAutocompeltePageAndRemoveTarget() {
        return cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({ force: true })
    }

    typeLetterToSearchBar() {
        this.searchBar.type('A')
    }

    autoComplete() {
        cy.get('#myInputautocomplete-list > *').each(($el) => {
            const product = $el.text()
            const productSelected = 'Avacado'
            if (product === productSelected) {
                cy.wrap($el).click()
                cy.get('#submit-button').click()
                cy.url().should('include', product)
            }
        }).then(() => {
            cy.get('#myInput').type('G')
            cy.get('#myInputautocomplete-list > *').each(($el) => {
                const product = $el.text()
                const productSelected = 'Grapes'
                if (product === productSelected) {
                    cy.wrap($el).click()
                    cy.get('#submit-button').click()
                    cy.url().should('include', product)
                }
            })
        })
    }
}

export default new AutoComplateText_PO()