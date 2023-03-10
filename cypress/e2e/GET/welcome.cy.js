/// <reference types="cypress" />

import { welcomeSchema } from "../../contracts/schema.contract";

describe("All successfull scenarios with GET request", () => {
  it("Verify the welcome message", () => {
    cy.welcome().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Welcome to the Simple Books API.");
      return welcomeSchema.validateAsync(response.body);
    });
    cy.screenshot();
  });
});
