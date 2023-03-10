/// <reference types="cypress" />

describe("Update an order", () => {
  it("Update an existing order. Requires authentication.", () => {
    cy.teste01().should((response) => {
      expect(response.status).to.eq(204);
    });
    cy.screenshot();
  });

  it("Update an existing order. without authentication.", () => {
    cy.updateNoAuth().should((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.error).to.eq("Missing Authorization header.");
    });
    cy.screenshot();
  });
});
