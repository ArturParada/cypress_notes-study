/// <reference types="cypress" />

describe("Veryfi autocomplete", () => {
    it("Select specyfic product", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myInput').type('A')
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


    });

});