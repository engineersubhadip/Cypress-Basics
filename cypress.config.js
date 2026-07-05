const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: "https://playground.bondaracademy.com/",
    specPattern: "cypress/e2e/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,js}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
