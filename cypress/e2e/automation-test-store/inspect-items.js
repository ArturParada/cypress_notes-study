/// <reference types = "cypress" />

describe("Inspect Automation Test shop useing chaing comments",()=>{
    it("Click on the item using item header",()=>{
       cy.visit('https://www.automationteststore.com/')
       cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname')
    
    })
    it("Click on the item using item text",()=>{
       cy.visit('https://www.automationteststore.com/')
       cy.get('.prdocutname').contains('Skinsheen').click().then((itemHeaderText)=>{
         console.log("Selected the fallowing item:" + itemHeaderText.text());
      })
    
    })
    it("Click on the item using index",()=>{
       cy.visit('https://www.automationteststore.com/')
       cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()   // pierw pobiera ele po klasie  fix..(musi miec pier jakis element po ktorym szuka) znajduej klasy produc i potem wybier apo indexie równym 0 
    
    })
})
