/// <reference types="cypress" />

import { booksSchema } from "../../contracts/schema.contract";

describe("All successfull scenarios with POST request", () => {
  it("Verify the welcome message", () => {
    cy.books().should((response) => {
      expect(response.status).to.eq(200);
      //return booksSchema.validateAsync(response.body);
    });
    cy.screenshot();
  });
});
