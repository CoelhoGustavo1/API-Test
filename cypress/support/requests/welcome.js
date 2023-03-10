//GET REQUEST
Cypress.Commands.add("welcome", () => {
  cy.api({
    method: "GET",
    url: "/",
  });
});

//POST REQUEST
