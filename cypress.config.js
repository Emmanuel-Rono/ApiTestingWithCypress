const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/apiTests/**/*.cy.js',  // Update this pattern to match your test files
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
