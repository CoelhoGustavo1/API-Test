const authorization =
  "e159075761c91ae636bbd41293bf224f7551da2b9c89544b5b04eb0feac26d4d";

const differentAuth =
  "d4f6fcf9d8a61f22cbbc3c544a3f64b1a2cd5e4752f0bc5c993138600f286b6b";

const idnum = "xrZLmEuB_6QkaHuwDiiwE";

//GET REQUEST
Cypress.Commands.add("update", () => {
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

Cypress.Commands.add("updateDifferentAuth", () => {
  cy.api({
    method: "PATCH",
    url: "/orders/xrZLmEuB_6QkaHuwDiiwE",
    headers: {
      Authorization: `Bearer ${differentAuth}`,
    },
    body: {
      customerName: "Test Name",
    },
    failOnStatusCode: false,
  });
});

//POST REQUEST
