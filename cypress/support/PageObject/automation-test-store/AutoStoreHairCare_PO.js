class AutoStoreHairCarePO {
    addHaireCareProduct() {
        data.productName.forEach(element => {
            cy.addProductToBasket(element)
        });
        cy.get('.dropdown-toggle > .fa').click()
    }
}

export default AutoStoreHairCarePO