/// <reference types="cypress" />
import HomePage_PO from "../../support/PageObject/webdrivwer-uni/HomePage_PO";
import CheckBoxes_PO from "../../support/PageObject/webdrivwer-uni/CheckBoxes_PO";
describe("Verify checkboxes", () => {
    beforeEach(() => {
        HomePage_PO.visitHomePage()
        HomePage_PO.visitDropDownChceckboxesRadiobuttonsPage()
    })

    it("Check and validate checkbox ", () => {
        CheckBoxes_PO.chooseChceckboxe(1)

    });
    it("Uncheck and validate checkbox ", () => {
        CheckBoxes_PO.uncheckAndValid()

    });
    it("Select multiple checkboxes ", () => {
        CheckBoxes_PO.selectMultiCheckboxe()
    })
    it("Select multiple checkboxes ", () => {
        CheckBoxes_PO.selectMultiCheckboxeViaEach()

    })
    // it("Select multiple checkboxes ", () => {
    //     const checkboxes = cy.get("input[type='checkbox']")
    //     checkboxes.each(($checkboxes) => {
    //         cy.wrap($checkboxes).click()
    //     })

    // })


});
