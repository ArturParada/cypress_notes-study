class AutoStoreHomePage {

    accessHomePage() {
        cy.visit("https://automationteststore.com/");
    }
    clickOnHaireCareLink() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }

}

export default AutoStoreHomePage