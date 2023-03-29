/// <reference types="cypress" />

describe("Test mouse actions", () => {
    it("Scroll elemnts into view ", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
    });
    it("Should be able to drag and drop ", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#draggable').trigger('mousedown', { which: 1 })    // which:1 clik on center element
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
    });
    it("double click ", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#double-click').dblclick()
    });
    it("I should be able to hold down the left mouse click button on a givent element ", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($elem) => {
            expect($elem).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    });



});