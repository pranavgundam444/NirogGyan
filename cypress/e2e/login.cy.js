describe("Login testing", () => {
    it("Logs in Successfully" , () => {
        cy.visit("https://niroggyan-frontend.onrender.com")
        cy.get('[data-cy="email"]').type("test@gmail.com");
        cy.get('[data-cy="password"]').type("123456")
        cy.get('[loginBtn]').click()

        cy.getCookie('jwt-token').should("exist")
    })
})