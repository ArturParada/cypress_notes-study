class ContactUs_PO {
    get firstName() {
        return cy.get('[name="first_name"]')
    }
    get lastName() {
        return cy.get('[name="last_name"]')
    }
    get email() {
        return cy.get('[name="email"]')
    }
    get comment() {
        return cy.get('textarea.feedback-input')
    }
    get submitBTN() {
        return cy.get('[type="submit"]')
    }

    contactFormSubmission(firstName, lastName, email, comments, $selector, textToLocate) {
        this.firstName.type(firstName);
        this.lastName.type(lastName);
        this.email.type(email)
        this.comment.type(comments)
        this.submitBTN.click();
        cy.get($selector).contains(textToLocate)
        cy.screenshot("contactUS")
    }

}

export default ContactUs_PO