/// <reference types = "Cypress" />

describe("Test Contact Us via WebdriverUni",()=>{
    it("Shuld be able to submit a succesful submission via contact us form",()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('#contact-us').click({force:true})
        cy.get("[name='first_name']").type('Artur')
        cy.get('[type="reset"]').click()
        // cy.get('h1').should('have.text', ' ')
    })
    it.only("Shuld not be able to submit a succesful submission via contact us form",()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact ')
        cy.url().should('include','contactus')
        cy.get("[name='first_name']").type('Artur')
        cy.get("[name='last_name']").type('jsadjas')
        cy.get('textarea.feedback-input').type('asdasdasdasdasdasdasd')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    })
})
