/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
});

afterEach("Closing the app", () => {
  cy.reload();
});

it("Hello World 1", () => {});
