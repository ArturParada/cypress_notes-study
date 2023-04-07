/// <reference types="cypress" />

describe('Test file upload', () => {
    it('Upload a file', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', "target").click()
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png')
        cy.get('#submit-button').click()
    });

    it('Upload no file ', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', "target").click()
        cy.get('#submit-button').click()
        cy.on("window:alert", str => {
            expect(str).to.equal('You need to select a file to upload!')
        })
        cy.on('window:confirm', () => true)
    });
});