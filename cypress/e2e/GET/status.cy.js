/// <reference types="cypress" />

import { statusSchema } from "../../contracts/schema.contract";

describe("Status", () => {
  it("Returns the status of the API.", () => {
    cy.status().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("OK");
      return statusSchema.validateAsync(response.body);
    });
    cy.screenshot();
  });
});
