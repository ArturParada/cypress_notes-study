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
    it("Caclculate and assert the age of given user based on last name", () => {

        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index) => {
            const text = $el.text()
            if (text.includes("Woods")) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) => {
                    const userAge = age.text()
                    expect(userAge).to.equal("80")
                })
            }
        })

    });

});
