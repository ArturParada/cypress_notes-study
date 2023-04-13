/// <reference types="cypress" />
import AutoStoreHomePage from "../../support/PageObject/automation-test-store/AutoStoreHomePage_PO";
import AutoStoreHairCarePO from "../../support/PageObject/automation-test-store/AutoStoreHairCare_PO";
describe("Add multiple items to basket", () => {
    const autostoreHomePagePO = new AutoStoreHomePage
    const autosotoreHairCareProduct = new AutoStoreHairCarePO

    before(function () {
        cy.fixture('products').then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        autostoreHomePagePO.acessHomePage()
        autostoreHomePagePO.clickOnHaireCareLink()
    })


    it("Add specific items to basket", () => {
        autosotoreHairCareProduct.addHaireCareProduct()

    });

});
