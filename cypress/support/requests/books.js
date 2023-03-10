//GET REQUESTS
Cypress.Commands.add("books", () => {
  cy.api({
    method: "GET",
    url: "/books",
  });
});

//POST REQUEST
