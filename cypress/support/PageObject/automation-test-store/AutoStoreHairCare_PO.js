class AutoStoreHairCarePO {
    addHaireCareProduct() {
        data.productName.forEach(element => {
            cy.addProductToBasket(element)
        });
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()
    }
}

export default AutoStoreHairCarePO