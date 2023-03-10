/// <reference types="cypress" />

import { booksSchema } from "../../contracts/schema.contract";

describe("List of books", () => {
  it("Returns a list of books.", () => {
    cy.books().should((response) => {
      expect(response.status).to.eq(200);
      //return booksSchema.validateAsync(response.body);
    });
    cy.screenshot();
  });
});
