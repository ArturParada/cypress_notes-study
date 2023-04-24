/// <reference types="cypress" />
import HomePage_PO from "../../support/PageObject/webdrivwer-uni/HomePage_PO";
import AutoComplateText_PO from "../../support/PageObject/automation-test-store/AutocomplateTextField_PO";

describe("Veryfi autocomplete", () => {
    it("Select specyfic product", () => {
        HomePage_PO.visitHomePage()
        AutoComplateText_PO.goAutocompeltePageAndRemoveTarget()
        AutoComplateText_PO.typeLetterToSearchBar()
        AutoComplateText_PO.autoComplete()
    });

});