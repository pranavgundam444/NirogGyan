describe("Google Search", () => {
  it("searches Cypress", () => {
    cy.visit("https://google.com");

    cy.get('textarea[name="q"]')
      .first()
      .type("Cypress testing{enter}");

    cy.contains("Cypress").should("exist");
  });
});
