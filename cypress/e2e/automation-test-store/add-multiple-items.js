/// <reference types="cypress" />

describe("Add multiple items to basket", () => {

    before(function () {
        cy.fixture('products').then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })


    it("Add specific items to basket", () => {
        data.productName.forEach(element => {
            cy.addProductToBasket(element)
        });
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()


    });

});
