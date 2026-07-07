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
  // find() -> To find child elements [Parents can be many, find() will target the parent having the reqd locator EX : cy.get("input") -> This is can return multiple elements, .find(".radio") -> This will find the 1st child having this class inside input]
  // contains() -> To find elements using text [It will only find the first match on the page, unlike get() which will find all the matches on the page]
  // contains() -> It is case sensitive, it is looking for exact match in the DOM
  // contains() -> It can also be used to find child elements by its text

  cy.contains('button[status="primary"]', "Sign in");
  cy.contains("nb-card", "Horizontal form").find("button");
  cy.contains("nb-card", "Horizontal form").contains("Sign in");
});

it("Child Elements", () => {
  // * Approach 1
  cy.contains("nb-card", "Using the Grid").find(".row").find("button");
  // * Approach 2
  cy.contains("nb-card", "Using the Grid").contains(".row", "Sign in");
  // * Lets target "Option 1"
  cy.get("nb-card").find("nb-radio-group").contains("Option 1");
});

it.only("Parent Elements", () => {
  // * Lets target the Sign-in button for "Using the Grid"
  cy.get("#inputEmail1")
    .parents()
    .eq(2)
    .contains("button", "Sign in")
    .then(console.log);
});
