const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    specPattern: 'cypress/integration/examples/*js', 
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
