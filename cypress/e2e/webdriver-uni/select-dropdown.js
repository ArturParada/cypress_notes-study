/// <reference types="cypress" />

describe("Interact with dropdown list", () => {
    it("Select value via dropdown list", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({ force: true })
        //selecting via value
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery') // via text
        cy.get('#dropdowm-menu-3').select('HTML').should('contain.text', 'HTML') // via text

    });

});