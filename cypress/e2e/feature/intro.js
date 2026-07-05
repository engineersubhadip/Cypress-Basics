/// <reference types="cypress" />

beforeEach("Open test app", () => {
  cy.visit("/");
  cy.contains('a[title="Forms"]', "Forms").click();
  cy.contains('a[title="Form Layouts"]', "Form Layouts").click();
});

// afterEach("Closing the app", () => {
//   cy.reload();
// });

it("Cypress Locators", () => {
  // get() -> To find elements on the page globally
  // find() -> To find child elements
  // contains() -> To find elements using text [It will only find the first match on the page, unlike get() which will find all the matches on the page]
  // contains() -> It is case sensitive, it is looking for exact match in the DOM
  cy.contains('button[status="primary"]', "Sign in");
  cy.contains("nb-card", "Horizontal form").find("button");
  cy.contains("nb-card", "Horizontal form").contains("Sign in");
});
