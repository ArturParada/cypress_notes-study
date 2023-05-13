class AutoStoreHairCarePO {
    get dropDownBasket() {
        return cy.get('.dropdown-toggle > .fa')
    }

    addHaireCareProduct() {
        cos.productName.forEach(element => {
            cy.addProductToBasket(element)
        });
        this.dropDownBasket.click()
    }
}

export default AutoStoreHairCarePO