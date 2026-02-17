describe("Login testing", () => {
  it("Logs in Successfully", () => {

    cy.visit("http://localhost:3000/login")

    cy.get('input[placeholder="Username"]')
      .first()
      .type("arjun@gmail.com")

    cy.get('input[placeholder="Password"]')
      .type("123")

    cy.contains("Login").click()

    cy.getCookie("token").should("exist")
  })
})
