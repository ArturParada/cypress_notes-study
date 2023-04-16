class AutoStoreHomePage {
    get productCategory() {
        return cy.get("a[href*='product/category&path=']")
    }
    accessHomePage() {
        cy.visit("https://automationteststore.com/");
    }
    clickOnHaireCareLink() {
        this.productCategory.contains("Hair Care").click();
    }
}

export default AutoStoreHomePage