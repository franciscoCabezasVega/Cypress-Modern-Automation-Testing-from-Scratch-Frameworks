const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: 'giqkuu',
  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/integration/*/*js', 'cypress/BDD/*.feature'],
    excludeSpecPattern: 'cypress/integration/pageObjects/*Page.js',
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'https://rahulshettyacademy.com',
    retries: {
      runMode: 2,
    },
  },
});
