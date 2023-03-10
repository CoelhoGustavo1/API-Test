//GET REQUESTS
Cypress.Commands.add("status", () => {
  cy.api({
    method: "GET",
    url: "/status",
  });
});

//POST REQUEST
