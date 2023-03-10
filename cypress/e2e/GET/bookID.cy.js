/// <reference types="cypress" />

import { bookID } from "../../contracts/schema.contract";

describe("Get a single book", () => {
  it("Retrieve detailed information about a book.", () => {
    cy.bookID().should((response) => {
      expect(response.status).to.eq(200);

      expect(response.body.id).to.eq(Number("1"));
      expect(response.body.name).to.eq("The Russian");
      expect(response.body.author).to.eq("James Patterson and James O. Born");
      expect(response.body.isbn).to.eq("1780899475");
      expect(response.body.type).to.eq("fiction");
      expect(response.body.price).to.eq(Number("12.98"));
      //expect(response.body."current-stock).to.eq("12");
      expect(response.body.available).to.eq(true);

      return bookID.validateAsync(response.body);
    });
    cy.screenshot();
  });
});
