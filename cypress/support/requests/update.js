const authorization =
  "e159075761c91ae636bbd41293bf224f7551da2b9c89544b5b04eb0feac26d4d";
const idnum = "xrZLmEuB_6QkaHuwDiiwE";

//GET REQUEST
Cypress.Commands.add("teste01", () => {
  cy.api({
    method: "PATCH",
    url: "/orders/xrZLmEuB_6QkaHuwDiiwE",
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
    body: {
      customerName: "Test Name",
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("updateNoAuth", () => {
  cy.api({
    method: "PATCH",
    url: "/orders/xrZLmEuB_6QkaHuwDiiwE",
    headers: {},
    body: {
      customerName: "Joshef",
    },
    failOnStatusCode: false,
  });
});

//POST REQUEST
