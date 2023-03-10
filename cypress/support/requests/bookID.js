//GET REQUESTS
Cypress.Commands.add("bookID", () => {
  cy.api({
    method: "GET",
    url: "/books/1",
  });
});

//POST REQUEST
