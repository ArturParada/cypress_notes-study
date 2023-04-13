class AutoStoreHomePage {
    homPageSeletor() {
        const test = cy.get("a[href*='product/category&path=']")
        return
    }

    acessHomePage() {
        cy.visit("https://automationteststore.com/");
    }
    clickOnHaireCareLink() {
        this.homPageSeletor.contains("Hair Care").click();
    }

}

export default AutoStoreHomePage