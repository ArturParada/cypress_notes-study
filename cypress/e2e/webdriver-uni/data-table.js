/// <reference types="Cypress" />
describe("Handling data via webdriverunit", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    it("Caclculate and assert the total age all users", () => {
        const userDetails = []
        let num = 0
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text()
        }).then(() => {
            for (let i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    num += Number(userDetails[i])
                }
            }
            cy.log(`Total age ${num}`)
            expect(num).to.eq(322)
        })

    });

});
