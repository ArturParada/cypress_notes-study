class AutoStoreHairCarePO {
    get dropDownBasket() {
        return cy.get('.dropdown-toggle > .fa')
    }

    addHaireCareProduct() {
        //cos zdefiniowane  w add-multiple-items , productName to data z jsona
        cos.productName.forEach(element => {
            cy.addProductToBasket(element)
        });
        this.dropDownBasket.click()
    }
}

export default AutoStoreHairCarePO