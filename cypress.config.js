const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'am6186',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*/*js', 
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
