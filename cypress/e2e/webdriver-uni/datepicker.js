/// <reference types="cypress" />

describe("Test date picker", () => {
    it("Select date from the datepicker ", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#datepicker").invoke('removeAttr', 'target').click({ force: true })
        cy.get('#datepicker').click()
        const date = new Date()
        date.setDate(date.getDate() + 10)

        const futureYear = date.getFullYear()
        const futureMonth = date.toLocaleString("default", { month: "long" })
        const futureDay = date.getDate()

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();
    });

})