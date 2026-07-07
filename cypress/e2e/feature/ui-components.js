/// <reference types = "cypress" />

beforeEach("Hititng the base url", () => {
  cy.visit("/");
});

it.only("Dealing with input fields", () => {
  cy.contains("a", "Forms").click();
  cy.contains("a", "Form Layouts").click();
  const name = "Subhadip";
  cy.get("#inputEmail1").type(`${name}@test.com`, { delay: 350 });

  //   * Scenario: We want to clear and type in an input field
  // * But the default text appears, after some time in the input field.

  cy.get("#inputEmail1")
    .should("prop", "value", `${name}@test.com`)
    .clear()
    .type("test@sify.com");

  //  * What if we do not know the default value, that will appear
  cy.get("#inputEmail1").should("not.have.value", "").clear().type("armadillo");

  //   * How to hit enter
  cy.contains("Auth").click();
  cy.contains("Login").click();
  cy.get("#input-email").type("test@nondaracademy.com");
  cy.get("#input-password").type("Welcome{enter}");
});
