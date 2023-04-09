/// <reference types = "cypress" />


describe("Test Contact Us via Aytomation Test Store", () => {
   before(function () {
      cy.fixture('userDetails').as("user")
   })
   it("Shuld be able to submit a succesful submission via contact us form", () => {
      cy.visit('https://www.automationteststore.com/')
      //    cy.get('.info_links_footer > :nth-child(5) > a').click()
      //css selektor a[href$='contact']
      cy.xpath("//a[contains(@href,'contact')]").click().then((item) => {
         cy.log(`cos ${item.text()}`);
      })
      cy.get("@user").then((user) => {
         cy.get('#ContactUsFrm_first_name').type(user.first_name)
         cy.get('#ContactUsFrm_email').type(user.email)

      })
      cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
      cy.get('#ContactUsFrm_enquiry').type('random text ')
      cy.get('button[title = "Submit"]').click()
      cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
      cy.log('hej')

   })
})
