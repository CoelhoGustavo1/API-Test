/// <reference types="cypress" />

import { testSchema } from "../../contracts/schema.contract";

describe("All successfull scenarios with POST request", () => {
  it("Verify the welcome message", () => {
    cy.welcome().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Welcome to the Simple Books API.");
      return testSchema.validateAsync(response.body);
    });
  });
});
