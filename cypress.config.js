const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'am6186',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*/*js',
    excludeSpecPattern: 'cypress/integration/pageObjects/*Page.js',
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'https://rahulshettyacademy.com',
    retries: {
      runMode: 2,
      openMode: 2,
    },
  },
});
