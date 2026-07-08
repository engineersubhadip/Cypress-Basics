/// <reference types = "cypress" />

beforeEach("Hititng the base url", () => {
  cy.visit("/");
});

it("Dealing with input fields", () => {
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

it("Dealing with radio buttons", () => {
  // * 1. Always try to target an <input> field with tyype="radio"
  // * 2. Always use .check() on an <input> field
  // * 3. Followed by .should("be.checked")
  cy.contains("a", "Forms").click();
  cy.contains("a", "Form Layouts").click();

  // * Approach : 1
  cy.get("nb-radio.status-basic")
    .eq(0)
    .find("input")
    .check({ force: true })
    .should("be.checked");

  cy.wait(1000);

  // * Approach : 2
  cy.get("nb-radio.status-basic")
    .first()
    .find("input")
    .check({ force: true })
    .should("be.checked");
});

it("Dealing with Check boxes", () => {
  // * 1. Always try to target an <input> field with tyype="radio"
  // * 2. Always use .check()/.uncheck() on an <input> field
  // * 3. Followed by .should("be.checked")/.should("be.unchecked")
  cy.contains("a", "Modal & Overlays").click();
  cy.contains("a", "Toastr").click();

  cy.get("input[type='checkbox']").first().uncheck({ force: true });
});

it("Dealing with Dropdowns", () => {
  cy.contains("a", "Modal & Overlays").click();
  cy.contains("a", "Toastr").click();

  cy.contains("label", "Position:")
    .parent("div.form-group")
    .find("button.select-button")
    .click();

  cy.get(".option-list").contains("bottom-end").click();
  cy.contains("label", "Position:")
    .parent("div.form-group")
    .find("button.select-button > span")
    .should("have.text", "bottom-end");

  cy.wait(2500);

  // * Scenario : We have a drop-down, we need to select every value from it and verify the selected value is displayed

  cy.contains("label", "Position:")
    .parent("div.form-group")
    .find("button.select-button")
    .then((dropDownButton) => {
      cy.wrap(dropDownButton).click();
      cy.get(".option-list nb-option")
        .should("be.visible")
        .each((currOption, index, list) => {
          const currOptionText = currOption.text();
          cy.wait(250);
          cy.wrap(currOption).click();
          cy.wrap(dropDownButton)
            .find("span")
            .should("have.text", currOptionText);
          if (index < list.length - 1) {
            cy.wrap(dropDownButton).click();
          }
        });
    });
});

it.only("Dealing with tooltips", () => {
  cy.contains("a", "Modal & Overlays").click();
  cy.contains("a", "Tooltip").click();
  cy.contains("button", "Top").trigger("mouseenter");
  cy.get("nb-tooltip")
    .contains("span", "This is a tooltip")
    .should("have.text", "This is a tooltip");
});
