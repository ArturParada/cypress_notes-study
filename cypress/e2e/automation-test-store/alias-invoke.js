/// <reference types="cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
    cy.get('@productThumbnail').its('length').should('be.gt', 5)
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
  });
  it.only("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnails .thumbnail").should(($thu) => {
      expect($thu).to.have.length(16)
    })
    //or
    //cy.get(".thumbnails .thumbnail").should('have.length' ,16)
    //find because all product is inside .thumbnails .thumbnail
    cy.get(".thumbnails .thumbnail").find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
  });
  it("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnails .thumbnail").as('productTumbnail')
    // cy.get('@productTumbnail').find('.oneprice').each($el =>{
    //   $el.text()
    // })
    cy.get(".thumbnails .thumbnail").find('.oneprice').invoke('text').as('itemPrice')
    cy.get(".thumbnails .thumbnail").find('.pricenew').invoke('text').as('saleItemPrice')

    let itemsTotal = 0

    cy.get('@itemPrice').then($linkText => {
      let itemsPriceTotal = 0
      const itemPrice = $linkText.split('$')
      itemPrice.forEach(ele => {
        // cy.log(ele)
        itemsPriceTotal += Number(ele)
        // cy.log(itemsPriceTotal)
      });
      itemsTotal += itemsPriceTotal
      cy.log(`Non sale price items total: ${itemsPriceTotal}`)
    })

    cy.get('@saleItemPrice').then($linkText => {
      let saleItemsPriceTotal = 0
      const saleItemPrice = $linkText.split('$')
      saleItemPrice.forEach(ele => {
        // cy.log(ele)
        saleItemsPriceTotal += Number(ele)
        // cy.log(saleItemsPriceTotal)
      });
      itemsTotal += saleItemsPriceTotal
      cy.log(`Sale price items total: ${saleItemsPriceTotal}`)
    })
      .then(() => {
        cy.log(`The total price of all products: ${itemsTotal}`)
        expect(itemsTotal).to.eq(639.49)
      })
  });

});
