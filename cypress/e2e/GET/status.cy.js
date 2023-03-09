/// <reference types="cypress" />

import { testSchema, statusSchema } from "../../contracts/schema.contract";

describe("All successfull scenarios with POST request", () => {
  it("Verify the welcome message", () => {
    cy.status().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("OK");
      return statusSchema.validateAsync(response.body);
    });
  });
});
