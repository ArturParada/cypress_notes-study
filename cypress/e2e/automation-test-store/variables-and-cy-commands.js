/// <reference types = "cypress" />

describe("Veryfing variables, cypress commmand and jquery commands",()=>{
    it("Navigating to specific product pages",()=>{
        cy.visit("https://automationteststore.com/")
        //pass
    //    const makeUpLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
    //    makeUpLink.click()
    //    const skinCareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
    //    skinCareLink.click()

       //fail
    //    const makeUpLink2 = cy.get("a[href*='product/category&path=']").contains('Makeup')
    //    const skinCareLink2 = cy.get("a[href*='product/category&path=']").contains('Skincare')
    //    makeUpLink2.click()
    //    skinCareLink2.click()
     // good approach
     cy.get("a[href*='product/category&path=']").contains('Makeup').click()
     cy.get("a[href*='product/category&path=']").contains('Skincare').click()
    })
    it("Navigating to specific product pages",()=>{
     cy.visit("https://automationteststore.com/")
     cy.get("a[href*='product/category&path=']").contains('Makeup').click()

     //Fail
    //  const header = cy.get("h1 .maintext")
    //  cy.log(header.txt())
    cy.get("h1 .maintext").then(($headerText)=>{
        const headerText = $headerText.text()
        cy.log(headerText)
        expect(headerText).is.eq('Makeup')
    })
    })
    it("Navigating to specific product pages",()=>{
     cy.visit("https://automationteststore.com/")
     cy.get("a[href*='product/category&path=']").contains('Makeup').click()

     //Fail
    //  const header = cy.get("h1 .maintext")
    //  cy.log(header.txt())
    cy.get("h1 .maintext").then(($headerText)=>{
        const headerText = $headerText.text()
        cy.log(headerText)
        expect(headerText).is.eq('Makeup')
    })
    })
    it.only("Navigating to specific product pages",()=>{
     cy.visit("https://automationteststore.com/index.php?rt=content/contact")

     //Uses cypress command and chain
     cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')
    //JQuery Approach
     cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
        const firstNameText = text.find('#field_11').text()
        expect(firstNameText).to.contain('First name')

        //Embedded commands (Closure)
        cy.get('#field_11').then(fnText => {
            cy.log(fnText.text())
            cy.log(fnText)
        })
    })
   
    })
})
