/// <reference types="cypress" />
import HomePage_PO from "../../support/PageObject/webdrivwer-uni/HomePage_PO";
import AutoComplateText_PO from "../../support/PageObject/automation-test-store/AutocomplateTextField_PO";

describe("Veryfi autocomplete", () => {
    it("Select specyfic product", () => {
        const homPagePO = new HomePage_PO
        const autoComplateTextPO = new AutoComplateText_PO
        homPagePO.visitHomePage()
        autoComplateTextPO.goAutocompeltePageAndRemoveTarget()
        autoComplateTextPO.typeLetterToSearchBar()
        autoComplateTextPO.autoComplete()
    });

});